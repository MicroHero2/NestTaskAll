import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GroupsService } from './group.service';
import { Group } from './entities/Group.entity';
import { CreateGroupInput } from './dto/create-group.input';
import { UpdateGroupInput } from './dto/update-group.input';

@Resolver(() => Group)
export class GroupsResolver {
  constructor(private readonly GroupsService: GroupsService) {}

  @Mutation(() => Group)
  createGroup(@Args('createGroupInput') createGroupInput: CreateGroupInput) {
    return this.GroupsService.create(createGroupInput);
  }

  @Query(() => [Group], { name: 'Groups' })
  findAll() {
    return this.GroupsService.findAll();
  }

  @Query(() => Group, { name: 'Group' })
  findOne(@Args('GroupId', { type: () => String }) GroupId: string) {
    return this.GroupsService.findOne(GroupId);
  }

  @Mutation(() => Group)
  updateGroup(@Args('updateGroupInput') updateGroupInput: UpdateGroupInput) {
    return this.GroupsService.update(updateGroupInput.groupId, updateGroupInput);
  }

  @Mutation(() => Group)
  removeGroup(@Args('GroupId', { type: () => String }) GroupId: string) {
    return this.GroupsService.remove(GroupId);
  }
}
