import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.schema';
import { UserDto } from './dtos/user.dto';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  @HttpCode(200)
  public async findUserByName(@Query() params: UserDto): Promise<User[]> {
    return this.usersService.findByName(params.name);
  }

  @Get('/text-search')
  @HttpCode(200)
  public async findUserByTextSearch(@Query() params: UserDto): Promise<User[]> {
    return this.usersService.findByNameTextSearch(params.name);
  }

  @Post('/')
  @HttpCode(200)
  public async createUser(@Body() params: UserDto): Promise<User> {
    return this.usersService.create(params);
  }
}
