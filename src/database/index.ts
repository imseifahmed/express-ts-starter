import database from '@/config/database';

class DatabaseInit {
  public async initialize(): Promise<void> {
    try {
      await database.connect();

      if (process.env.NODE_ENV !== 'production') {
        await database.sequelize.sync({ alter: true });
        console.log('Database synchronized');
      }
    } catch (error) {
      console.error('Database initialization failed:', error);
      throw error;
    }
  }
}

export default new DatabaseInit();
