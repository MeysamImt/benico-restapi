import { Request, Response } from 'express';
import {
  initiatePayment as initiatePaymentService,
  getPayment as getPaymentService,
  confirmPayment as confirmPaymentService,
  refundPayment as refundPaymentService,
} from '../../services/payment/paymentService';

export const initiatePayment = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const payment = await initiatePaymentService((req.user as any).id, req.body);
    res.status(201).json({ payment });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getPayment = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const payment = await getPaymentService(req.params.paymentId, (req.user as any).id);
    if (!payment) return res.status(404).json({ message: 'Payment not found' });
    res.json({ payment });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const confirmPayment = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const payment = await confirmPaymentService(req.params.paymentId, (req.user as any).id);
    res.json({ payment });
  } catch (err: any) {
    if (err.message === 'Forbidden') return res.status(403).json({ message: 'Forbidden' });
    res.status(400).json({ message: err.message });
  }
};

export const refundPayment = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const payment = await refundPaymentService(req.params.paymentId, (req.user as any).id);
    res.json({ payment });
  } catch (err: any) {
    if (err.message === 'Forbidden') return res.status(403).json({ message: 'Forbidden' });
    res.status(400).json({ message: err.message });
  }
};
