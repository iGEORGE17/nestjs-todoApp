import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './schemas/todos.schema';

@Injectable()
export class TodosService {

  constructor(@InjectModel(Todo.name) private TodoModel: Model<Todo>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {

    const todo = new this.TodoModel(createTodoDto)
    return todo.save();
  }

  async findAll(): Promise<Todo[]> {
    return await this.TodoModel.find().exec();
  }

  async findOne(id: string): Promise<Todo | null> {
    return await this.TodoModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    return await this.TodoModel.findByIdAndUpdate(id, updateTodoDto, { new: true }).exec()
  }

  async remove(id: string): Promise<Todo | null> {
    return await this.TodoModel.findByIdAndDelete(id).exec();
  }
}
