import { Request, Response, NextFunction } from 'express';
import { createLogger } from '../utils/logger';

const logger = createLogger('ErrorHandler');

export class HttpException extends Error {
  public status: number;
  public message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export const errorHandler = (error: HttpException, req: Request, res: Response, next: NextFunction): void => {
  const status = error.status || 500;
  const message = error.message || 'Internal Server Error';

  logger.error(`HTTP Error: ${status} - ${message}`, error);

  res.status(status).json({
    status,
    message,
  });
};
