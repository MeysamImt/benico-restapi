import { Router } from 'express';
import { authenticateJWT } from '../../middleware/authMiddleware';
import { enable2FA, disable2FA, verify2FA } from '../../controllers/2fa/2faController';

const router = Router();

/**
 * @openapi
 * /2fa/enable:
 *   post:
 *     summary: Enable two-factor authentication
 *     tags: [2FA]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               method:
 *                 type: string
 *                 example: email
 *     responses:
 *       200:
 *         description: 2FA enabled
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 2FA enabled
 */
router.post('/enable', authenticateJWT, enable2FA);
router.post('/disable', authenticateJWT, disable2FA);
router.post('/verify', authenticateJWT, verify2FA);

export default router;
