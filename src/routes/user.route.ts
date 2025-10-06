import { Router } from 'express';
import { Route } from '@/interfaces/route.interface';
import { UserController } from '@/controllers/user.controller';
import { ValidationMiddleware } from '@/middlewares/validation.middleware';
import { CreateUserDto, UpdateUserDto } from '@/dtos/user.dto';

class UserRoute implements Route {
  public router: Router;
  private userController: UserController;

  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.userController.getUsers);
    this.router.get('/:id', this.userController.getUserById);
    this.router.post('/', ValidationMiddleware(CreateUserDto), this.userController.createUser);
    this.router.put('/:id', ValidationMiddleware(UpdateUserDto), this.userController.updateUser);
    this.router.delete('/:id', this.userController.deleteUser);
  }
}

export default new UserRoute().router;
