import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
  } from '@nestjs/graphql';
  import { Schema as MongooseSchema } from 'mongoose';
  
  import { Group, GroupDocument } from './group.model';
  import { GroupService } from './group.service';
  import {
    CreateGroupInput,
    ListGroupInput,
    UpdateGroupInput,
  } from './group.inputs';
  import { User } from '../user/user.model';
  
  @Resolver(() => Group)
  export class GroupResolver {
    constructor(private GroupService: GroupService) {}
  
    @Query(() => Group)
    async Group(@Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId) {
      return this.GroupService.getById(_id);
    }
  
    @Query(() => [Group])
    async Groups(
      @Args('filters', { nullable: true }) filters?: ListGroupInput,
    ) {
      return this.GroupService.list(filters);
    }
  
    @Mutation(() => Group)
    async createGroup(@Args('payload') payload: CreateGroupInput) {
      return this.GroupService.create(payload);
    }
  
    @Mutation(() => Group)
    async getGroup(@Args('payload') payload: CreateGroupInput) {
      return this.GroupService.create(payload);
    }

    @Mutation(() => Group)
    async updateGroup(@Args('payload') payload: UpdateGroupInput) {
      return this.GroupService.update(payload);
    }
  
    @Mutation(() => Group)
    async deleteGroup(@Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId) {
      return this.GroupService.delete(_id);
    }
  
    @ResolveField()
    async groups(
      @Parent() Group: GroupDocument,
      @Args('populate') populate: boolean,
    ) {
      if (populate)
        await Group
          .populate({ path: 'users', model: User.name });      
  
      
    }
  }
  