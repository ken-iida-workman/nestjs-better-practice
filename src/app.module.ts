import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserModule } from './modules/createUser.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sqlite.db',
      synchronize: true,
      // コンパイル後のフォルダを指定しないとエラーになる
      entities: ['dist/entities/*.js'],
    }),
    CreateUserModule,
  ],
})
export class AppModule {}
