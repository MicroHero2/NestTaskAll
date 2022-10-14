import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateGroupDto } from 'src/dto/group.dto';
import { UpdateGroupDto } from 'src/dto/updategroup.dto';
import { GroupService } from 'src/service/group.service';

@Controller('group')
export class GroupController {
   constructor(private readonly groupService: GroupService) { }
@Post()
   async createGroup(@Res() response, @Body() createGroupDto: CreateGroupDto) {
  try {
    const newGroup = await this.groupService.createGroup(createGroupDto);
    return response.status(HttpStatus.CREATED).json({
    message: 'Group has been created successfully',
    newGroup,});
 } catch (err) {
    return response.status(HttpStatus.BAD_REQUEST).json({
    statusCode: 400,
    message: 'Error: Group not created!',
    error: 'Bad Request'
 });
 }
}
@Put('/:id')
async updateGroup(@Res() response,@Param('id') GroupId: string,
@Body() updateGroupDto: UpdateGroupDto) {
  try {
   const existingGroup = await this.groupService.updateGroup(GroupId, updateGroupDto);
  return response.status(HttpStatus.OK).json({
  message: 'Group has been successfully updated',
  existingGroup,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}
@Get()
async getGroups(@Res() response) {
try {
  const GroupData = await this.groupService.getAllGroups();
  return response.status(HttpStatus.OK).json({
  message: 'All Groups data found successfully',GroupData,});
 } catch (err) {
  return response.status(err.status).json(err.response);
 }
}
@Get('/:id')
async getGroup(@Res() response, @Param('id') GroupId: string) {
 try {
    const existingGroup = await
this.groupService.getGroup(GroupId);
    return response.status(HttpStatus.OK).json({
    message: 'Group found successfully',existingGroup,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}
@Delete('/:id')
async deleteGroup(@Res() response, @Param('id') GroupId: string)
{
  try {
    const deletedGroup = await this.groupService.deleteGroup(GroupId);
    return response.status(HttpStatus.OK).json({
    message: 'Group deleted successfully',
    deletedGroup,});
  }catch (err) {
    return response.status(err.status).json(err.response);
  }
 }
}