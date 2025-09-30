import User, { UserCreationAttributes } from '@/models/user.model';
import { Service } from 'typedi';
import { createLogger } from '@/utils/logger';

@Service()
export class UserService {
  private logger = createLogger(UserService.name);

  public async getAllUsers(): Promise<User[]> {
    try {
      return await User.findAll();
    } catch (error) {
      this.logger.error('Error fetching all users', error as Error);
      throw error;
    }
  }

  public async getUserById(id: number): Promise<User | null> {
    try {
      return await User.findByPk(id);
    } catch (error) {
      this.logger.error(`Error fetching user with id ${id}`, error as Error);
      throw error;
    }
  }

  public async createUser(userData: UserCreationAttributes): Promise<User> {
    try {
      return await User.create(userData);
    } catch (error) {
      this.logger.error('Error creating user', error as Error);
      throw error;
    }
  }

  public async updateUser(id: number, userData: Partial<UserCreationAttributes>): Promise<User | null> {
    try {
      const user = await User.findByPk(id);

      if (!user) return null;

      await user.update(userData);
      return user;
    } catch (error) {
      this.logger.error(`Error updating user with id ${id}`, error as Error);
      throw error;
    }
  }

  public async deleteUser(id: number): Promise<boolean> {
    try {
      const user = await User.findByPk(id);

      if (!user) return false;

      await user.destroy();
      return true;
    } catch (error) {
      this.logger.error(`Error deleting user with id ${id}`, error as Error);
      throw error;
    }
  }
}
