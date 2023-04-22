import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/user/dto/create.user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() data: UserDto): Promise<UserDto> {
    return await this.userService.create(data);
  }

  @Get()
  async getAllUsers(): Promise<UserDto[]> {
    return this.userService.getAll();
  }
}
