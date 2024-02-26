import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserEventsDto } from './dto/userEvent.dto';
import { UserEventService } from './userEvent.service';

@Controller('api/evencomp/userEvents')
export class UserEventsController {
  constructor(private readonly userEventService: UserEventService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('add')
  async createUserEvent(@Body() body: UserEventsDto) {
    return await this.userEventService.createUserEvent(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('getAll/:id')
  async getAllUserEvents(@Param('userId') userId: string) {
    return await this.userEventService.getAllUserEvents(userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('get/:id')
  async getUserEventById(@Param('id') id: string) {
    return await this.userEventService.getUserEventById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('get/test/:activityId')
  async getLengthUsersSubscribedByActivity(
    @Param('activityId') activityId: string,
  ) {
    return await this.userEventService.getLengthOfUsersSubscribedByActivity(
      activityId,
    );
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('update/:id')
  async updateUserEvent(@Param('id') id: string, @Body() body: UserEventsDto) {
    return await this.userEventService.updateUserEvent(id, body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('delete/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUserEvent(@Param('id') id: string) {
    return await this.userEventService.deleteUserEvent(id);
  }
}
