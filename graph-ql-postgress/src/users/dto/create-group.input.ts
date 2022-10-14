import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateGroupInput {
  @Field(() => String,)
  User: string;
  @Field(() => String,)
  name: string;
}
