import { Router } from 'express';
import { authenticateJWT } from '../../middleware/authMiddleware';
import {
  createProduct,
  listProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  uploadProductImage,
  deleteProductImage,
  searchProducts,
} from '../../controllers/product/productController';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../../uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});
const upload = multer({ storage });

const router = Router();

/**
 * @openapi
 * /product:
 *   post:
 *     summary: Create a new product
 *     tags: [Product]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Sample Hotel
 *               category:
 *                 type: string
 *                 example: hotel
 *               type:
 *                 type: string
 *                 example: HOTEL
 *               province:
 *                 type: string
 *                 example: Tehran
 *               city:
 *                 type: string
 *                 example: Tehran
 *               price:
 *                 type: integer
 *                 example: 1000000
 *     responses:
 *       201:
 *         description: Product created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 product:
 *                   $ref: '#/components/schemas/Product'
 */
router.post('/', authenticateJWT, createProduct);
/**
 * @openapi
 * /product:
 *   get:
 *     summary: List all products
 *     tags: [Product]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 products:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 */
router.get('/', authenticateJWT, listProducts);
router.get('/search', authenticateJWT, searchProducts);
/**
 * @openapi
 * /product/{productId}:
 *   get:
 *     summary: Get product details
 *     tags: [Product]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 product:
 *                   $ref: '#/components/schemas/Product'
 */
router.get('/:productId', authenticateJWT, getProduct);
/**
 * @openapi
 * /product/{productId}:
 *   put:
 *     summary: Update a product
 *     tags: [Product]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Updated Hotel
 *     responses:
 *       200:
 *         description: Updated product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 product:
 *                   $ref: '#/components/schemas/Product'
 */
router.put('/:productId', authenticateJWT, updateProduct);
/**
 * @openapi
 * /product/{productId}:
 *   delete:
 *     summary: Delete a product
 *     tags: [Product]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Product deleted
 */
router.delete('/:productId', authenticateJWT, deleteProduct);
router.post('/:productId/images', authenticateJWT, upload.array('images', 10), uploadProductImage);
router.delete('/:productId/images', authenticateJWT, deleteProductImage);

export default router;
