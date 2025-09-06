import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

class UserRoutes {
  public router: Router;
  private userController: UserController;

  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.userController.getAllUsers);
    this.router.get('/:id', this.userController.getUserById);
    this.router.post('/', this.userController.createUser);
    this.router.put('/:id', this.userController.updateUser);
    this.router.delete('/:id', this.userController.deleteUser);
  }
}

export default new UserRoutes().router;