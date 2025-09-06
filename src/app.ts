import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.configureMiddlewares();
    this.configureRoutes();
    this.configureErrorHandling();
  }

  private configureMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    
    this.app.use(helmet());
    
    this.app.use(cors());
  }

  private configureRoutes(): void {
    this.app.use('/api', routes);
  }

  private configureErrorHandling(): void {
    this.app.use(errorHandler);
  }
}

export default new App().app;