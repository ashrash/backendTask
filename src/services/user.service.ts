import User from '@/interfaces/user.interface';
import sequelize from '../models';

class UserService {
  public userModel = sequelize.User;

  async findUserById(userId: number): Promise<User> {
    const user: User = await this.userModel.findOne({
      where: {
        id: userId,
      }
    });
    return user;
  }

  async updateBalance(userId: number, cost: number): Promise<User> {
    const user: User = await this.userModel.update({ balance: cost },{
      where: {
        id: userId,
      }
    });
    return user;
  }

}

export default UserService;
