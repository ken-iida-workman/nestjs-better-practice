import { IsAlphanumeric, IsNumber, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsAlphanumeric()
  name: string;

  @IsNumber()
  @IsOptional()
  age: number;
}
