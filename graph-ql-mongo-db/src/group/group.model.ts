import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document, Schema as MongooseSchema } from 'mongoose';

@ObjectType()
@Schema()
export class Group {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => [Group])
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Group.name })
  groups: MongooseSchema.Types.ObjectId[] | Group[];
}

export type GroupDocument = Group & Document;

export const GroupSchema = SchemaFactory.createForClass(Group);
