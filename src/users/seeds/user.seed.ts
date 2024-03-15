import { Command, Positional } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users.service';

@Injectable()
export class UserSeed {
  constructor(private readonly usersService: UsersService) {}

  @Command({
    command: 'create:user <userNumber>',
    describe: 'create a user',
  })
  async create(
    @Positional({
      name: 'userNumber',
      describe: 'user number',
      type: 'number',
    })
    userNumber: number,
  ) {
    if (!isNaN(userNumber)) {
      await this.usersService.createUsers(userNumber);
    } else {
      throw new Error('Invalid number of users provided.');
    }
  }
}
