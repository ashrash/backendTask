import User from '@/interfaces/user.interface';
import sequelize from '../models';

class UserService {
  public userModel = sequelize.User;

  async findUserById(userId: number): Promise<User> {
    const product: User = await this.userModel.findOne({
      where: {
        id: userId,
      }
    });
    return product;
  }
}

export default UserService;
