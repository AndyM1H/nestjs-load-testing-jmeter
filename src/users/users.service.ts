import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.schema';
import { UserDto } from './dtos/user.dto';
import { fakeUsersGenerator } from './utils/users.utils';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(user: UserDto): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async createUsers(limit: number) {
    try {
      const totalItems = limit;
      const chunkSize = 100000;
      const usersGenerator = fakeUsersGenerator(totalItems, chunkSize);

      for (const chunk of usersGenerator) {
        await this.userModel.insertMany(chunk);
        console.log(`Inserted ${chunk.length} records.`);
      }
    } catch (error) {
      throw error;
    }
  }

  async findByName(searchTerm: string): Promise<User[]> {
    return this.userModel.find({ name: searchTerm }).limit(10);
  }

  async findByNameTextSearch(searchTerm: string): Promise<User[]> {
    return this.userModel.find({ $text: { $search: searchTerm } }).limit(10);
  }
}
