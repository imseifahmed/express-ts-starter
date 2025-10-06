import { Router } from 'express';
import userRoutes from '@/routes/user.route';

class Routes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.use('/users', userRoutes);
  }
}

export default new Routes().router;