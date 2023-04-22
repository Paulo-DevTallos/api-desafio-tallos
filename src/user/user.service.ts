import {
  BadRequest,
  Conflict,
  ErrorIncompletedFields,
} from 'config/exceptions';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/user/dto/create.user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('users') private readonly userModel: Model<UserDto>,
  ) {}

  async create(userData: UserDto): Promise<UserDto> {
    const user = { ...userData };

    const userExists = await this.userModel.findOne({ email: user.email });

    if (userExists) throw new Conflict('Usuário já cadastrado');

    try {
      const createNewUser = await this.userModel.create(user);

      return createNewUser;
    } catch (error) {
      if (!user.name || !user.email || !user.password) {
        throw new ErrorIncompletedFields('Preencha os campos corretamente!');
      } else {
        throw new BadRequest('Falha na requisição!');
      }
    }
  }

  async getAll(): Promise<UserDto[]> {
    return this.userModel.find();
  }
}
