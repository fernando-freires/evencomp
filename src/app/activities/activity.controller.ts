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
import { ActivityDto } from './dto/activity.dto';
import { ActivityUpdateDto } from './dto/activity.update.dto';
import { ActivityService } from './activity.service';

@Controller('api/evencomp/activities')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post('add/:userId')
  async createActivity(
    @Param('userId') userId: string,
    @Body() body: ActivityDto,
  ) {
    return await this.activityService.createActivity(body, userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('getAll')
  async getAllActivities() {
    return await this.activityService.getAllActivities();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('get/:id')
  async getActivityById(@Param('id') id: string) {
    return await this.activityService.getActivityById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('update/:id')
  async updateActivity(
    @Param('id') id: string,
    @Body() body: ActivityUpdateDto,
  ) {
    return await this.activityService.updateActivity(id, body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('delete/:userId/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteActivity(
    @Param('userId') userId: string,
    @Param('id') id: string,
  ) {
    return await this.activityService.deleteActivity(userId, id);
  }
}
