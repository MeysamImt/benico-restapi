import { Router } from 'express';
import { authenticateJWT } from '../../middleware/authMiddleware';
import {
  createApiKey,
  listApiKeys,
  updateApiKey,
  revokeApiKey,
} from '../../controllers/apikey/apikeyController';

const router = Router();

/**
 * @openapi
 * /apikey/{tenantId}/api-keys:
 *   post:
 *     summary: Create API key for tenant
 *     tags: [APIKey]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tenantId
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
 *               name:
 *                 type: string
 *                 example: My API Key
 *     responses:
 *       201:
 *         description: API key created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 apiKey:
 *                   $ref: '#/components/schemas/ApiKey'
 */
router.post('/:tenantId/api-keys', authenticateJWT, createApiKey);

/**
 * @openapi
 * /apikey/{tenantId}/api-keys:
 *   get:
 *     summary: List API keys of tenant
 *     tags: [APIKey]
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
 *         description: List of API keys
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 apiKeys:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ApiKey'
 */
router.get('/:tenantId/api-keys', authenticateJWT, listApiKeys);

/**
 * @openapi
 * /apikey/{tenantId}/api-keys/{apiKeyId}:
 *   put:
 *     summary: Update API key details
 *     tags: [APIKey]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tenantId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: apiKeyId
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
 *               name:
 *                 type: string
 *                 example: Updated API Key
 *     responses:
 *       200:
 *         description: Updated API key
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 apiKey:
 *                   $ref: '#/components/schemas/ApiKey'
 */
router.put('/:tenantId/api-keys/:apiKeyId', authenticateJWT, updateApiKey);

/**
 * @openapi
 * /apikey/{tenantId}/api-keys/{apiKeyId}:
 *   delete:
 *     summary: Revoke/delete API key
 *     tags: [APIKey]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tenantId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: apiKeyId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: API key revoked/deleted
 */
router.delete('/:tenantId/api-keys/:apiKeyId', authenticateJWT, revokeApiKey);

export default router;
