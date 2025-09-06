import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

class Database {
  public sequelize: Sequelize;

  constructor() {
    this.sequelize = new Sequelize(
      process.env.DB_NAME!,
      process.env.DB_USER!,
      process.env.DB_PASSWORD!,
      {
        host: process.env.DB_HOST!,
        port: parseInt(process.env.DB_PORT || '3306'),
        dialect: 'mysql',
        logging: process.env.NODE_ENV !== 'production',
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
        },
      }
    );
  }

  public async connect(): Promise<void> {
    try {
      await this.sequelize.authenticate();
      console.log('Database connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      throw error;
    }
  }
}

export default new Database();