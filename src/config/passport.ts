import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy } from 'passport-github2';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export function initPassport() {
  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id: string, done) => {
    const user = await prisma.user.findUnique({ where: { id } });
    done(null, user);
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
        callbackURL: '/api/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const email = profile.emails?.[0]?.value;
          let user = await prisma.user.findUnique({ where: { email } });
          if (!user) {
            user = await prisma.user.create({
              data: {
                email,
                fullName: profile.displayName,
                passwordHash: '',
                isEmailVerified: true,
                social: { provider: 'google', providerId: profile.id },
              },
            });
          }
          done(null, user);
        } catch (err: any) {
          done(err);
        }
      },
    ),
  );

  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
        callbackURL: '/api/auth/github/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const email = profile.emails?.[0]?.value;
          let user = await prisma.user.findUnique({ where: { email } });
          if (!user) {
            user = await prisma.user.create({
              data: {
                email,
                fullName: profile.displayName,
                passwordHash: '',
                isEmailVerified: true,
                social: { provider: 'github', providerId: profile.id },
              },
            });
          }
          done(null, user);
        } catch (err: any) {
          done(err);
        }
      },
    ),
  );
}
