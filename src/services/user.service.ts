import User from '@/models/user.model';
import { Service } from 'typedi';
import { hash } from 'bcrypt';
import { createLogger } from '@/utils/logger';
import { HttpException } from '@/exceptions/HttpException';
import { CreateUserDto } from '@/dtos/user.dto';

@Service()
export class UserService {
  private logger = createLogger(UserService.name);

  public async getUsers(): Promise<User[]> {
    const users: User[] = await User.findAll();
    return users;
  }

  public async getUserById(id: number): Promise<User> {
    const findUser = await User.findByPk(id);
    if (!findUser) throw new HttpException(404, `User with id ${id} not found`);

    return findUser;
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    const findUser: User = await User.findOne({ where: { email: userData.email } });
    if (findUser) throw new HttpException(409, `Email ${userData.email} already exists`);

    const hashedPassword = await hash(userData.password, 12);

    const createUserData: User = await User.create({ ...userData, password: hashedPassword });
    return createUserData;
  }

  public async updateUser(id: number, userData: Partial<CreateUserDto>): Promise<User> {
    const findUser: User = await User.findByPk(id);
    if (!findUser) throw new HttpException(404, `User with id ${id} not found`);

    const hashedPassword = await hash(userData.password, 12);

    await findUser.update({ ...userData, password: hashedPassword });
    return findUser;
  }

  public async deleteUser(id: number): Promise<User> {
    const findUser: User = await User.findByPk(id);
    if (!findUser) throw new HttpException(404, `User with id ${id} not found`);

    await findUser.destroy();
    return findUser;
  }
}
