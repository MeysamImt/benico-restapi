import { Router } from 'express';
import { authenticateJWT } from '../../middleware/authMiddleware';
import {
  listWebhooks,
  createWebhook,
  updateWebhook,
  deleteWebhook,
  listWebhookDeliveries,
} from '../../controllers/webhook/webhookController';

const router = Router();

/**
 * @openapi
 * /webhooks:
 *   get:
 *     summary: List all webhooks for tenant
 *     tags: [Webhook]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of webhooks
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 webhooks:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Webhook'
 */
router.get('/', authenticateJWT, listWebhooks);
/**
 * @openapi
 * /webhooks:
 *   post:
 *     summary: Create a new webhook
 *     tags: [Webhook]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 example: https://example.com/webhook
 *               eventTypes:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["payment.succeeded"]
 *     responses:
 *       201:
 *         description: Webhook created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 webhook:
 *                   $ref: '#/components/schemas/Webhook'
 */
router.post('/', authenticateJWT, createWebhook);
/**
 * @openapi
 * /webhooks/{webhookId}:
 *   put:
 *     summary: Update webhook details
 *     tags: [Webhook]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: webhookId
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
 *               url:
 *                 type: string
 *                 example: https://example.com/webhook
 *               eventTypes:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["payment.succeeded"]
 *     responses:
 *       200:
 *         description: Updated webhook
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 webhook:
 *                   $ref: '#/components/schemas/Webhook'
 */
router.put('/:webhookId', authenticateJWT, updateWebhook);
/**
 * @openapi
 * /webhooks/{webhookId}:
 *   delete:
 *     summary: Delete a webhook
 *     tags: [Webhook]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: webhookId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Webhook deleted
 */
router.delete('/:webhookId', authenticateJWT, deleteWebhook);
/**
 * @openapi
 * /webhooks/{webhookId}/deliveries:
 *   get:
 *     summary: View webhook delivery attempts
 *     tags: [Webhook]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: webhookId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of webhook deliveries
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 deliveries:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/WebhookDelivery'
 */
router.get('/:webhookId/deliveries', authenticateJWT, listWebhookDeliveries);

export default router; 