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
  constructor(private readonly activitiesService: ActivityService) {}
  @Post('add')
  async createActivityr(@Body() body: ActivityDto) {
    return await this.activitiesService.createActivity(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('getAll')
  async getAllActivities() {
    return await this.activitiesService.getAllActivities();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('get/:id')
  async getActivityById(@Param('id') id: string) {
    return await this.activitiesService.getActivityById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('update/:id')
  async updateActivity(
    @Param('id') id: string,
    @Body() body: ActivityUpdateDto,
  ) {
    return await this.activitiesService.updateActivity(id, body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('delete/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteActivity(@Param('id') id: string) {
    return await this.activitiesService.deleteActivity(id);
  }
}
