import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService extends TypeOrmCrudService<User>{
  constructor(@InjectRepository(User) usersRepository: Repository<User>){
    super(usersRepository);
  }
}