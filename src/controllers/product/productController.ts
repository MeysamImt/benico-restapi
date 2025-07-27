import { Request, Response } from 'express';
import {
  createProduct as createProductService,
  listProducts as listProductsService,
  getProduct as getProductService,
  updateProduct as updateProductService,
  deleteProduct as deleteProductService,
  searchProducts as searchProductsService,
} from '../../services/product/productService';
import { PrismaClient } from '@prisma/client';
import path from 'path';

const prisma = new PrismaClient();

export const createProduct = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const product = await createProductService((req.user as any).id, req.body);
    res.status(201).json({ product });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const listProducts = async (req: Request, res: Response) => {
  try {
    const products = await listProductsService();
    res.json({ products });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await getProductService(req.params.productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ product });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const product = await updateProductService(req.params.productId, (req.user as any).id, req.body);
    res.json({ product });
  } catch (err: any) {
    if (err.message === 'Forbidden') return res.status(403).json({ message: 'Forbidden' });
    res.status(400).json({ message: err.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    await deleteProductService(req.params.productId, (req.user as any).id);
    res.status(204).send();
  } catch (err: any) {
    if (err.message === 'Forbidden') return res.status(403).json({ message: 'Forbidden' });
    res.status(400).json({ message: err.message });
  }
};

export const uploadProductImage = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const productId = req.params.productId;
    const product = await prisma.product.findUnique({ where: { id: productId } });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    if (product.createdById !== (req.user as any).id) return res.status(403).json({ message: 'Forbidden' });
    const files = req.files as Express.Multer.File[];
    if (!files || files.length === 0) return res.status(400).json({ message: 'No files uploaded' });
    const imagePaths = files.map(f => path.join('uploads', f.filename));
    const currentImages = Array.isArray(product.images) ? product.images : [];
    const updated = await prisma.product.update({
      where: { id: productId },
      data: { images: [...currentImages, ...imagePaths] },
    });
    res.json({ product: updated });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteProductImage = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const productId = req.params.productId;
    const { images } = req.body;
    if (!Array.isArray(images) || images.length === 0) return res.status(400).json({ message: 'No images specified' });
    const product = await prisma.product.findUnique({ where: { id: productId } });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    if (product.createdById !== (req.user as any).id) return res.status(403).json({ message: 'Forbidden' });
    const currentImages = Array.isArray(product.images) ? product.images : [];
    const updatedImages = currentImages.filter((img: string) => !images.includes(img));
    const updated = await prisma.product.update({
      where: { id: productId },
      data: { images: updatedImages },
    });
    res.json({ product: updated });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const searchProducts = async (req: Request, res: Response) => {
  try {
    const { province, city, category, minPrice, maxPrice, type, isActive } = req.query;
    const filters: any = {};
    if (province) filters.province = province;
    if (city) filters.city = city;
    if (category) filters.category = category;
    if (type) filters.type = type;
    if (isActive !== undefined) filters.isActive = isActive === 'true';
    if (minPrice || maxPrice) {
      filters.price = {};
      if (minPrice) filters.price.gte = Number(minPrice);
      if (maxPrice) filters.price.lte = Number(maxPrice);
    }
    const products = await searchProductsService(filters);
    res.json({ products });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
