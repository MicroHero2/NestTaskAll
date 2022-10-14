import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupInput } from './dto/create-Group.input';
import { UpdateGroupInput } from './dto/update-Group.input';
import { Group } from './entities/Group.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private readonly GroupRepository: Repository<Group>,
  ) {}

  async create(createGroupInput: CreateGroupInput): Promise<Group> {
    const Group = this.GroupRepository.create(createGroupInput);
    return await this.GroupRepository.save(Group);
  }

  async findAll(): Promise<Array<Group>> {
    return await this.GroupRepository.find();
  }

  async findOne(GroupId: any): Promise<Group> {
    const Group = await this.GroupRepository.findOne(GroupId);
    if (!Group) {
      throw new NotFoundException(`Group #${GroupId} not found`);
    }
    return Group;
  }

  async update(
    GroupId: string,
    updateGroupInput: UpdateGroupInput,
  ): Promise<Group> {
    const Group = await this.GroupRepository.preload({
      groupId: GroupId,
      ...updateGroupInput,
    });
    if (!Group) {
      throw new NotFoundException(`Group #${GroupId} not found`);
    }
    return this.GroupRepository.save(Group);
  }

  async remove(GroupId: string): Promise<Group> {
    const Group = await this.findOne(GroupId);
    await this.GroupRepository.remove(Group);
    return {
      categories:[],
      name: '',
    };
  }
}
