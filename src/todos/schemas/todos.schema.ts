
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';


@Schema()
export class Todo {
  @Prop()
  task: string;

  @Prop({ default: false })
  completed: boolean;

}

export const TodoSchema = SchemaFactory.createForClass(Todo);
