import { Request, Response, NextFunction } from 'express';
import { createLogger } from '@/utils/logger';
import { HttpException } from '@/exceptions/HttpException';

const logger = createLogger('ErrorHandler');

export const ErrorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction): void => {
  const status = error.status || 500;
  const message = error.message || 'Internal Server Error';

  logger.error(`HTTP Error: ${status} - ${message}`, error);

  res.status(status).json({
    status,
    message,
  });
};
