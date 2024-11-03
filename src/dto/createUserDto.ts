import { IsNumber, IsOptional } from 'class-validator';
import { IsAlphanumeric } from 'src/decorators';

export class CreateUserDto {
  @IsAlphanumeric()
  name: string;

  @IsNumber()
  @IsOptional()
  age: number;
}
