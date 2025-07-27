import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import apiRouter from './routes';
import session from 'express-session';
import passport from 'passport';
import { initPassport } from './config/passport';
import { basicRateLimit } from './middleware/rateLimit';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';
import path from 'path';

initPassport();

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'changeme',
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.initialize());
app.use(passport.session());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(basicRateLimit);

// سرو کردن فایل‌های static در پوشه public
app.use(express.static(path.join(__dirname, '../public')));

// صفحه اصلی status.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/status.html'));
});

app.use('/api', apiRouter);
app.get('/api-docs-json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
});

}

export default app;
