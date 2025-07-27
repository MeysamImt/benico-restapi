import { Router } from 'express';
import { authenticateJWT } from '../../middleware/authMiddleware';
import { listSessions, revokeSession } from '../../controllers/session/sessionController';

const router = Router();

/**
 * @openapi
 * /sessions:
 *   get:
 *     summary: List active user sessions
 *     tags: [Session]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of sessions
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sessions:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Session'
 */
router.get('/', authenticateJWT, listSessions);
router.delete('/:sessionId', authenticateJWT, revokeSession);

export default router;
