import { Router } from 'express';
import { authenticateJWT } from '../../middleware/authMiddleware';
import {
  createReservation,
  listReservations,
  getReservation,
  updateReservation,
  deleteReservation,
} from '../../controllers/reservation/reservationController';

const router = Router();

/**
 * @openapi
 * /reservation:
 *   post:
 *     summary: Create a new reservation
 *     tags: [Reservation]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *                 example: product123
 *               quantity:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Reservation created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reservation:
 *                   $ref: '#/components/schemas/Reservation'
 */
router.post('/', authenticateJWT, createReservation);
/**
 * @openapi
 * /reservation:
 *   get:
 *     summary: List reservations
 *     tags: [Reservation]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of reservations
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reservations:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Reservation'
 */
router.get('/', authenticateJWT, listReservations);
/**
 * @openapi
 * /reservation/{reservationId}:
 *   get:
 *     summary: Get reservation details
 *     tags: [Reservation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: reservationId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reservation details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reservation:
 *                   $ref: '#/components/schemas/Reservation'
 */
router.get('/:reservationId', authenticateJWT, getReservation);
/**
 * @openapi
 * /reservation/{reservationId}:
 *   put:
 *     summary: Update a reservation
 *     tags: [Reservation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: reservationId
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
 *               status:
 *                 type: string
 *                 example: PAID
 *     responses:
 *       200:
 *         description: Updated reservation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reservation:
 *                   $ref: '#/components/schemas/Reservation'
 */
router.put('/:reservationId', authenticateJWT, updateReservation);
/**
 * @openapi
 * /reservation/{reservationId}:
 *   delete:
 *     summary: Delete a reservation
 *     tags: [Reservation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: reservationId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Reservation deleted
 */
router.delete('/:reservationId', authenticateJWT, deleteReservation);

export default router;
