import { Router } from 'express';
import { authenticateJWT } from '../../middleware/authMiddleware';
import {
  listRoles,
  createRole,
  updateRole,
  deleteRole,
  listRolePermissions,
  assignPermission,
  removePermission,
} from '../../controllers/rbac/rbacController';

const router = Router();

/**
 * @openapi
 * /rbac/roles:
 *   get:
 *     summary: List all roles
 *     tags: [RBAC]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of roles
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 roles:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Role'
 */
router.get('/roles', authenticateJWT, listRoles);
/**
 * @openapi
 * /rbac/roles:
 *   post:
 *     summary: Create a new role
 *     tags: [RBAC]
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
 *                 example: Admin
 *     responses:
 *       201:
 *         description: Role created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 role:
 *                   $ref: '#/components/schemas/Role'
 */
router.post('/roles', authenticateJWT, createRole);
/**
 * @openapi
 * /rbac/roles/{roleId}:
 *   put:
 *     summary: Update a role
 *     tags: [RBAC]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: roleId
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
 *                 example: Updated Role
 *     responses:
 *       200:
 *         description: Updated role
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 role:
 *                   $ref: '#/components/schemas/Role'
 */
router.put('/roles/:roleId', authenticateJWT, updateRole);
/**
 * @openapi
 * /rbac/roles/{roleId}:
 *   delete:
 *     summary: Delete a role
 *     tags: [RBAC]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: roleId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Role deleted
 */
router.delete('/roles/:roleId', authenticateJWT, deleteRole);

router.get('/roles/:roleId/permissions', authenticateJWT, listRolePermissions);
router.post('/roles/:roleId/permissions', authenticateJWT, assignPermission);
router.delete('/roles/:roleId/permissions/:permissionId', authenticateJWT, removePermission);

export default router;
