import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosController } from './todos/todos.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    TodosModule
  ],
  controllers: [AppController, TodosController],
  providers: [AppService],
})
export class AppModule {}
