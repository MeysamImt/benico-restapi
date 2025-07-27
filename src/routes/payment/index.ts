import { Router } from 'express';
import { authenticateJWT } from '../../middleware/authMiddleware';
import {
  initiatePayment,
  getPayment,
  confirmPayment,
  refundPayment,
} from '../../controllers/payment/paymentController';

const router = Router();

/**
 * @openapi
 * /payment/initiate:
 *   post:
 *     summary: Initiate a new payment
 *     tags: [Payment]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: integer
 *                 example: 100000
 *               purpose:
 *                 type: string
 *                 example: PRODUCT
 *               targetId:
 *                 type: string
 *                 example: product123
 *     responses:
 *       201:
 *         description: Payment initiated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 payment:
 *                   $ref: '#/components/schemas/Payment'
 */
router.post('/initiate', authenticateJWT, initiatePayment);
/**
 * @openapi
 * /payment/{paymentId}:
 *   get:
 *     summary: Get payment status and details
 *     tags: [Payment]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: paymentId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Payment details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 payment:
 *                   $ref: '#/components/schemas/Payment'
 */
router.get('/:paymentId', authenticateJWT, getPayment);
/**
 * @openapi
 * /payment/{paymentId}/confirm:
 *   post:
 *     summary: Confirm a payment
 *     tags: [Payment]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: paymentId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Payment confirmed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 payment:
 *                   $ref: '#/components/schemas/Payment'
 */
router.post('/:paymentId/confirm', authenticateJWT, confirmPayment);
/**
 * @openapi
 * /payment/{paymentId}/refund:
 *   post:
 *     summary: Refund a payment
 *     tags: [Payment]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: paymentId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Payment refunded
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 payment:
 *                   $ref: '#/components/schemas/Payment'
 */
router.post('/:paymentId/refund', authenticateJWT, refundPayment);

export default router;
