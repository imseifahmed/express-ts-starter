import { Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { UserService } from '@/services/user.service';
import asyncHandler from '@/utils/asyncHandler';
import { HttpException } from '@/exceptions/HttpException';

export class UserController {
  private userService = Container.get(UserService);

  public getAllUsers = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Logic
  });

  public getUserById = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Logic
  });

  public createUser = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Logic
  });

  public updateUser = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Logic
  });

  public deleteUser = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Logic
  });
}
