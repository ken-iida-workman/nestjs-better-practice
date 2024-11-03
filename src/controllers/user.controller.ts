import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/createUserDto';
import { CreateUserUseCase } from 'src/usecase/createUser.usecase';

@Controller()
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.createUserUseCase.execute(body);
  }
}
