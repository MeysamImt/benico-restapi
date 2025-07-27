import { Request, Response } from 'express';
import { listUserSessions, revokeUserSession } from '../../services/session/sessionService';

export const listSessions = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const sessions = await listUserSessions((req.user as any).id);
    res.json({ sessions });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const revokeSession = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    await revokeUserSession((req.user as any).id, req.params.sessionId);
    res.status(204).send();
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
};
