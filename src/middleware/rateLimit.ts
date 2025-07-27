import rateLimit from 'express-rate-limit';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import Redis from 'ioredis';
import { Request, Response, NextFunction } from 'express';

const redisClient = new Redis({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: Number(process.env.REDIS_PORT) || 6379,
  password: process.env.REDIS_PASSWORD || undefined,
});

const rateLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'rlflx',
  points: 100, // 100 requests
  duration: 60, // per 60 seconds per IP
});

export function redisRateLimiter(req: Request, res: Response, next: NextFunction) {
  const key = req.ip;
  rateLimiter.consume(key)
    .then(() => next())
    .catch(() => res.status(429).json({ message: 'Too many requests' }));
}

export const basicRateLimit = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // limit each IP to 100 requests per windowMs
  message: { message: 'Too many requests' },
}); 