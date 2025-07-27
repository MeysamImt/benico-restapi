import { Router } from 'express';
import authRouter from './auth';
import userRouter from './user';
import twoFARouter from './2fa';
import sessionRouter from './session';
import logsRouter from './logs';
import tenantRouter from './tenant';
import apikeyRouter from './apikey';
import subscriptionRouter from './subscription';
import rbacRouter from './rbac';
import productRouter from './product';
import reservationRouter from './reservation';
import paymentRouter from './payment';
import webhookRouter from './webhook';

const router = Router();

router.get('/', (req: import('express').Request, res: import('express').Response) => {
  res.json({ message: 'API is running' });
});

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/2fa', twoFARouter);
router.use('/sessions', sessionRouter);
router.use('/logs', logsRouter);
router.use('/tenant', tenantRouter);
router.use('/apikey', apikeyRouter);
router.use('/subscription', subscriptionRouter);
router.use('/rbac', rbacRouter);
router.use('/product', productRouter);
router.use('/reservation', reservationRouter);
router.use('/payment', paymentRouter);
router.use('/webhooks', webhookRouter);

export default router;
