import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  group: string;
  @Field(() => String)
  name: string;
  @Field(() => String)
  age: string;
}
