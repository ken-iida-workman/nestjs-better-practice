import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from 'src/controllers/user.controller';
import { User } from 'src/entities/User';
import { CreateUserUseCase } from 'src/usecase/createUser.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [CreateUserUseCase],
})
export class CreateUserModule {}
