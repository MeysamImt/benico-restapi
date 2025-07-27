import { Request, Response } from 'express';
import {
  getLoginLogs as getLoginLogsService,
  getAuditLogs as getAuditLogsService,
  getApiUsageLogs as getApiUsageLogsService,
} from '../../services/logs/logsService';

export const getLoginLogsHandler = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const logs = await getLoginLogsService((req.user as any).id as string);
    res.json({ logs });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getAuditLogs = async (req: Request, res: Response) => {
  try {
    const { tenantId } = req.query;
    const logs = await getAuditLogsService(tenantId as string | undefined);
    res.json({ logs });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getApiUsageLogs = async (req: Request, res: Response) => {
  try {
    const { tenantId } = req.query;
    const logs = await getApiUsageLogsService(tenantId as string | undefined);
    res.json({ logs });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
