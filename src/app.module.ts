import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UsersService } from './users/users.service';


@Module({
  imports: [ProductModule, ConfigModule.forRoot(), MongooseModule.forRoot(process.env['MONGO_DB']),],
  controllers: [AppController,],
  providers: [AppService, UsersService],
})
export class AppModule { }
