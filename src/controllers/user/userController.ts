import { Request, Response } from 'express';
import {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
} from '../../services/user/userService';
import { z } from 'zod';

export const getProfile = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const profile = await getUserProfile((req.user as any).id);
    if (!profile) return res.status(404).json({ message: 'User not found' });
    res.json({ user: profile });
  } catch {}
};

const updateSchema = z.object({
  fullName: z.string().optional(),
  phone: z.string().optional(),
  avatarUrl: z.string().url().optional(),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER']).optional(),
  birthdate: z.coerce.date().optional(),
  bio: z.string().optional(),
  location: z.any().optional(),
  social: z.any().optional(),
});

export const updateProfile = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const parsed = updateSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ errors: parsed.error.flatten().fieldErrors });
    }
    const updateData = { ...parsed.data };
    if (updateData.birthdate) {
      updateData.birthdate = new Date(updateData.birthdate);
    }
    const updated = await updateUserProfile((req.user as any).id, updateData);
    res.json({ user: updated });
  } catch {}
};

export const deleteProfile = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    await deleteUserProfile((req.user as any).id);
    res.status(204).send();
  } catch {}
};
