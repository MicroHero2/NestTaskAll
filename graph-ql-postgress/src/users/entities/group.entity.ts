import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
@ObjectType()
export class Group {
  @PrimaryGeneratedColumn('uuid')
  @Column()
  @ManyToMany(() => User)
  @JoinTable()
  categories: User[];
  @Column()
  @Field(() => String)
  name: string;
}
