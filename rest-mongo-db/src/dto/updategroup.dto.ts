import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupDto } from './group.dto';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {}