import { Request, Response } from 'express';
import {
  listRoles as listRolesService,
  createRole as createRoleService,
  updateRole as updateRoleService,
  deleteRole as deleteRoleService,
  listRolePermissions as listRolePermissionsService,
  assignPermission as assignPermissionService,
  removePermission as removePermissionService,
} from '../../services/rbac/rbacService';

export const listRoles = async (req: Request, res: Response) => {
  try {
    const roles = await listRolesService();
    res.json({ roles });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const createRole = async (req: Request, res: Response) => {
  try {
    const role = await createRoleService(req.body);
    res.status(201).json({ role });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateRole = async (req: Request, res: Response) => {
  try {
    const role = await updateRoleService(req.params.roleId, req.body);
    res.json({ role });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteRole = async (req: Request, res: Response) => {
  try {
    await deleteRoleService(req.params.roleId);
    res.status(204).send();
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const listRolePermissions = async (req: Request, res: Response) => {
  try {
    const permissions = await listRolePermissionsService(req.params.roleId);
    res.json({ permissions });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const assignPermission = async (req: Request, res: Response) => {
  try {
    const { permissionId } = req.body;
    const role = await assignPermissionService(req.params.roleId, permissionId);
    res.json({ role });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const removePermission = async (req: Request, res: Response) => {
  try {
    const role = await removePermissionService(req.params.roleId, req.params.permissionId);
    res.json({ role });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
