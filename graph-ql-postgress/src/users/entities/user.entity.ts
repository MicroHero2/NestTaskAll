import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Column()
  @Field(() => String)
  group: string;
  @Column()
  @Field(() => String)
  name: string;
  @Column('int')
  @Field(() => Int)
  age: string;
}
