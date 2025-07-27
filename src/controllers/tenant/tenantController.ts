import { Request, Response } from 'express';
import {
  createTenant as createTenantService,
  listTenants as listTenantsService,
  getTenant as getTenantService,
  updateTenant as updateTenantService,
  deleteTenant as deleteTenantService,
} from '../../services/tenant/tenantService';
import {
  listMembers as listMembersService,
  inviteMember as inviteMemberService,
  updateMemberRole as updateMemberRoleService,
  removeMember as removeMemberService,
} from '../../services/tenant/tenantService';

export const createTenant = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const tenant = await createTenantService((req.user as any).id, req.body);
    res.status(201).json({ tenant });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
export const listTenants = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const tenants = await listTenantsService((req.user as any).id);
    res.json({ tenants });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getTenant = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const tenant = await getTenantService(req.params.tenantId, (req.user as any).id);
    if (!tenant) return res.status(404).json({ message: 'Tenant not found' });
    res.json({ tenant });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateTenant = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const tenant = await updateTenantService(req.params.tenantId, (req.user as any).id, req.body);
    res.json({ tenant });
  } catch (err: any) {
    if (err.message === 'Forbidden') return res.status(403).json({ message: 'Forbidden' });
    res.status(400).json({ message: err.message });
  }
};

export const deleteTenant = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    await deleteTenantService(req.params.tenantId, (req.user as any).id);
    res.status(204).send();
  } catch (err: any) {
    if (err.message === 'Forbidden') return res.status(403).json({ message: 'Forbidden' });
    res.status(400).json({ message: err.message });
  }
};

export const listMembers = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const members = await listMembersService(req.params.tenantId);
    res.json({ members });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const inviteMember = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const { userId, roleId } = req.body;
    const member = await inviteMemberService(req.params.tenantId, userId, roleId);
    res.status(201).json({ member });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateMemberRole = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const { roleId } = req.body;
    const member = await updateMemberRoleService(req.params.tenantId, req.params.memberId, roleId);
    res.json({ member });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const removeMember = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    await removeMemberService(req.params.tenantId, req.params.memberId);
    res.status(204).send();
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
