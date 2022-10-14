import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

import { User } from './entities/user.entity';
import { Group } from './entities/group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Group])],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
