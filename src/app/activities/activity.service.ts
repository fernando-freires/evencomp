import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityDto } from './dto/activity.dto';
import { ActivityUpdateDto } from './dto/activity.update.dto';
import { ActivityEntity } from './activity.entity';
import { UserService } from '../users/user.service';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(ActivityEntity)
    private readonly activityRepository: Repository<ActivityEntity>,
    private readonly userService: UserService,
  ) {}

  async createActivity(data: ActivityDto, userId: string) {
    const user = await this.userService.getUserById(userId);

    try {
      if (user.admin) {
        const activity = await this.activityRepository.create(data);
        return await this.activityRepository.save(activity);
      }
    } catch (error) {
      throw new NotFoundException(`${error.message}`);
    }
  }

  async getAllActivities() {
    return await this.activityRepository.find({
      select: [
        'id',
        'title',
        'description',
        'dateStart',
        'dateEnd',
        'location',
        'event_id',
        'category',
        'duration',
        'speaker',
        'startTime',
        'status',
        'subscribersLimit',
      ],
    });
  }

  async getActivityById(id: string) {
    try {
      return await this.activityRepository.findOneOrFail({
        where: { id: id },
      });
    } catch (error) {
      throw new NotFoundException(`${error.message}`);
    }
  }

  async updateActivity(id: string, data: ActivityUpdateDto) {
    const activities = await this.activityRepository.findOne({
      where: { id },
    });
    this.activityRepository.merge(activities, data);
    return await this.activityRepository.save(activities);
  }

  async deleteActivity(userId: string, id: string) {
    const user = await this.userService.getUserById(userId);

    try {
      if (user.admin) {
        await this.activityRepository.findOne({ where: { id } });
        this.activityRepository.delete(id);
      }
    } catch (error) {
      throw new NotFoundException(`${error.message}`);
    }
  }
}
