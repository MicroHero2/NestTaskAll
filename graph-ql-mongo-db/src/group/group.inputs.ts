import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class CreateGroupInput {
  @Field(() => String)
  name: string;

  @Field(() => [String])
  groups: MongooseSchema.Types.ObjectId[];
}

@InputType()
export class ListGroupInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [String], { nullable: true })
  groups?: MongooseSchema.Types.ObjectId[];
}

@InputType()
export class UpdateGroupInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [String], { nullable: true })
  groups?: MongooseSchema.Types.ObjectId[];
}
