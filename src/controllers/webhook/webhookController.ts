import { Request, Response } from 'express';
import {
  listWebhooks as listWebhooksService,
  createWebhook as createWebhookService,
  updateWebhook as updateWebhookService,
  deleteWebhook as deleteWebhookService,
  listWebhookDeliveries as listWebhookDeliveriesService,
} from '../../services/webhook/webhookService';

export const listWebhooks = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const webhooks = await listWebhooksService((req.user as any).id);
    res.json({ webhooks });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const createWebhook = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const webhook = await createWebhookService((req.user as any).id, req.body);
    res.status(201).json({ webhook });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateWebhook = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const webhook = await updateWebhookService((req.user as any).id, req.params.webhookId, req.body);
    res.json({ webhook });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteWebhook = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    await deleteWebhookService((req.user as any).id, req.params.webhookId);
    res.status(204).send();
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const listWebhookDeliveries = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const deliveries = await listWebhookDeliveriesService((req.user as any).id, req.params.webhookId);
    res.json({ deliveries });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}; 