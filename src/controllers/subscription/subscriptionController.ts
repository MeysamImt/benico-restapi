import { Request, Response } from 'express';
import {
  listSubscriptions as listSubscriptionsService,
  createSubscription as createSubscriptionService,
  listInvoices as listInvoicesService,
  getUsage as getUsageService,
} from '../../services/subscription/subscriptionService';

export const listSubscriptions = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const subscriptions = await listSubscriptionsService(req.params.tenantId);
    res.json({ subscriptions });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const createSubscription = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const { planId, paymentMethod } = req.body;
    const subscription = await createSubscriptionService(
      req.params.tenantId,
      planId,
      paymentMethod,
    );
    res.status(201).json({ subscription });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const listInvoices = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const invoices = await listInvoicesService(req.params.tenantId);
    res.json({ invoices });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getUsage = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const usage = await getUsageService(req.params.tenantId);
    res.json({ usage });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
