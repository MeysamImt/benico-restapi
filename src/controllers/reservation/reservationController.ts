import { Request, Response } from 'express';
import {
  createReservation as createReservationService,
  listReservations as listReservationsService,
  getReservation as getReservationService,
  updateReservation as updateReservationService,
  deleteReservation as deleteReservationService,
} from '../../services/reservation/reservationService';

export const createReservation = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const reservation = await createReservationService((req.user as any).id, req.body);
    res.status(201).json({ reservation });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const listReservations = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const reservations = await listReservationsService((req.user as any).id);
    res.json({ reservations });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getReservation = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const reservation = await getReservationService(req.params.reservationId, (req.user as any).id);
    if (!reservation) return res.status(404).json({ message: 'Reservation not found' });
    res.json({ reservation });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateReservation = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const reservation = await updateReservationService(
      req.params.reservationId,
      (req.user as any).id,
      req.body,
    );
    res.json({ reservation });
  } catch (err: any) {
    if (err.message === 'Forbidden') return res.status(403).json({ message: 'Forbidden' });
    res.status(400).json({ message: err.message });
  }
};

export const deleteReservation = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    await deleteReservationService(req.params.reservationId, (req.user as any).id);
    res.status(204).send();
  } catch (err: any) {
    if (err.message === 'Forbidden') return res.status(403).json({ message: 'Forbidden' });
    res.status(400).json({ message: err.message });
  }
};
