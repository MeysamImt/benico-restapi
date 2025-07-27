import { Request, Response } from 'express';
import {
  createApiKey as createApiKeyService,
  listApiKeys as listApiKeysService,
  updateApiKey as updateApiKeyService,
  revokeApiKey as revokeApiKeyService,
} from '../../services/apikey/apikeyService';

export const createApiKey = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const apiKey = await createApiKeyService(req.params.tenantId, (req.user as any).id, req.body);
    res.status(201).json({ apiKey });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const listApiKeys = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const apiKeys = await listApiKeysService(req.params.tenantId);
    res.json({ apiKeys });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateApiKey = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const apiKey = await updateApiKeyService(req.params.tenantId, req.params.apiKeyId, req.body);
    res.json({ apiKey });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const revokeApiKey = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    await revokeApiKeyService(req.params.tenantId, req.params.apiKeyId);
    res.status(204).send();
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
