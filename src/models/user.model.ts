import { DataTypes, Model, Optional } from 'sequelize';
import { User } from '@interfaces/user.interface';
import database from '@/config/database';

export type UserCreationAttributes = Optional<User, 'id' | 'email' | 'password'>;
export class UserModel extends Model<User, UserCreationAttributes> implements User {
  public id!: number;
  public email!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize: database.sequelize,
    tableName: 'users',
    timestamps: true,
  },
);

export default UserModel;
