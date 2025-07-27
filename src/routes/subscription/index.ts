import { Router } from 'express';
import { authenticateJWT } from '../../middleware/authMiddleware';
import {
  listSubscriptions,
  createSubscription,
  listInvoices,
  getUsage,
} from '../../controllers/subscription/subscriptionController';

const router = Router();

/**
 * @openapi
 * /subscription/{tenantId}/subscriptions:
 *   get:
 *     summary: List tenant subscriptions
 *     tags: [Subscription]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tenantId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of subscriptions
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 subscriptions:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Subscription'
 */
router.get('/:tenantId/subscriptions', authenticateJWT, listSubscriptions);
router.post('/:tenantId/subscriptions', authenticateJWT, createSubscription);
/**
 * @openapi
 * /subscription/{tenantId}/invoices:
 *   get:
 *     summary: Get invoices related to tenant
 *     tags: [Subscription]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tenantId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of invoices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 invoices:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Invoice'
 */
router.get('/:tenantId/invoices', authenticateJWT, listInvoices);
/**
 * @openapi
 * /subscription/{tenantId}/usage:
 *   get:
 *     summary: Get API and service usage records for tenant
 *     tags: [Subscription]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tenantId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usage records
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 usage:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/UsageRecord'
 */
router.get('/:tenantId/usage', authenticateJWT, getUsage);

export default router;
