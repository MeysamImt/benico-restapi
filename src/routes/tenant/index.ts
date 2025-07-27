import { Router } from 'express';
import { authenticateJWT } from '../../middleware/authMiddleware';
import {
  createTenant,
  listTenants,
  getTenant,
  updateTenant,
  deleteTenant,
  listMembers,
  inviteMember,
  updateMemberRole,
  removeMember,
} from '../../controllers/tenant/tenantController';

const router = Router();

/**
 * @openapi
 * /tenant:
 *   post:
 *     summary: Create a new tenant (organization)
 *     tags: [Tenant]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: My Organization
 *     responses:
 *       201:
 *         description: Tenant created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tenant:
 *                   $ref: '#/components/schemas/Tenant'
 */
router.post('/', authenticateJWT, createTenant);
/**
 * @openapi
 * /tenant:
 *   get:
 *     summary: List all tenants user belongs to
 *     tags: [Tenant]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of tenants
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tenants:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Tenant'
 */
router.get('/', authenticateJWT, listTenants);
/**
 * @openapi
 * /tenant/{tenantId}:
 *   get:
 *     summary: Get tenant details
 *     tags: [Tenant]
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
 *         description: Tenant details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tenant:
 *                   $ref: '#/components/schemas/Tenant'
 */
router.get('/:tenantId', authenticateJWT, getTenant);
/**
 * @openapi
 * /tenant/{tenantId}:
 *   put:
 *     summary: Update tenant information
 *     tags: [Tenant]
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
 *                 example: Updated Org
 *     responses:
 *       200:
 *         description: Updated tenant
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tenant:
 *                   $ref: '#/components/schemas/Tenant'
 */
router.put('/:tenantId', authenticateJWT, updateTenant);
/**
 * @openapi
 * /tenant/{tenantId}:
 *   delete:
 *     summary: Delete a tenant
 *     tags: [Tenant]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tenantId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Tenant deleted
 */
router.delete('/:tenantId', authenticateJWT, deleteTenant);

router.get('/:tenantId/members', authenticateJWT, listMembers);
router.post('/:tenantId/members', authenticateJWT, inviteMember);
router.put('/:tenantId/members/:memberId', authenticateJWT, updateMemberRole);
router.delete('/:tenantId/members/:memberId', authenticateJWT, removeMember);

export default router;
