import { Router } from 'express';
import { authenticateJWT } from '../../middleware/authMiddleware';
import { getProfile, updateProfile, deleteProfile } from '../../controllers/user/userController';

const router = Router();

/**
 * @openapi
 * /user/me:
 *   get:
 *     summary: Get current user profile
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 email:
 *                   type: string
 *                 fullName:
 *                   type: string
 *                 phone:
 *                   type: string
 *                   example: '+1234567890'
 */
router.get('/me', authenticateJWT, getProfile);
/**
 * @openapi
 * /user/me:
 *   put:
 *     summary: Update current user profile
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: John Doe
 *               phone:
 *                 type: string
 *                 example: '+1234567890'
 *     responses:
 *       200:
 *         description: Updated user profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 email:
 *                   type: string
 *                 fullName:
 *                   type: string
 *                 phone:
 *                   type: string
 */
router.put('/me', authenticateJWT, updateProfile);
/**
 * @openapi
 * /user/me:
 *   delete:
 *     summary: Delete current user profile
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       204:
 *         description: User deleted
 */
router.delete('/me', authenticateJWT, deleteProfile);

export default router;
