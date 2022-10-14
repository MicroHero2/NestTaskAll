import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Group, GroupSchema } from './group.model';
import { GroupService } from './group.service';
import { GroupResolver } from './group.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Group.name, schema: GroupSchema }]),
  ],
  providers: [GroupService, GroupResolver],
})
export class GroupModule {}
