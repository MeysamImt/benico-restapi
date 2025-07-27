import { Router } from 'express';
import { authenticateJWT } from '../../middleware/authMiddleware';
import {
  getLoginLogsHandler,
  getAuditLogs,
  getApiUsageLogs,
} from '../../controllers/logs/logsController';

const router = Router();

/**
 * @openapi
 * /logs/login:
 *   get:
 *     summary: Retrieve user login logs
 *     tags: [Logs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of login logs
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 logs:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/LoginLog'
 */
router.get('/login', authenticateJWT, getLoginLogsHandler);
/**
 * @openapi
 * /logs/audit:
 *   get:
 *     summary: Retrieve audit logs
 *     tags: [Logs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: tenantId
 *         schema:
 *           type: string
 *         required: false
 *     responses:
 *       200:
 *         description: List of audit logs
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 logs:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/AuditLog'
 */
router.get('/audit', authenticateJWT, getAuditLogs);
/**
 * @openapi
 * /logs/api-usage:
 *   get:
 *     summary: Get logs of API usage
 *     tags: [Logs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: tenantId
 *         schema:
 *           type: string
 *         required: false
 *     responses:
 *       200:
 *         description: List of API usage logs
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 logs:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ApiUsageLog'
 */
router.get('/api-usage', authenticateJWT, getApiUsageLogs);

export default router;
