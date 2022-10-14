import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../schemas/user.schema';

export type GroupDocument = Group & Document;

@Schema()
export class Group {

  @Prop()
  Id: number;
    
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  User: User;  

  @Prop()
  name: string;

}

export const GroupSchema = SchemaFactory.createForClass(Group);