import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async execute(body: { name: string }) {
    return await this.userRepository.save(body);
  }
}
