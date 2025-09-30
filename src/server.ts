import app from '@/app';
import dotenv from 'dotenv';
import databaseInit from '@/database';

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await databaseInit.initialize();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
    process.exit(1);
  }
};

startServer();