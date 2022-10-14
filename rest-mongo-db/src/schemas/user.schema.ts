import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Group } from '../schemas/group.schema';

export type UserDocument = User & Document;

@Schema(
  
)
export class User {
    
  @Prop()
  Id: number;
  
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Group'})
  group: Group;

  @Prop()
  name: string;

  @Prop()
  age: number;

 }

export const UserSchema = SchemaFactory.createForClass(User);
