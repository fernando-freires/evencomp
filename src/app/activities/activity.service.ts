import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityDto } from './dto/activity.dto';
import { ActivityUpdateDto } from './dto/activity.update.dto';
import { ActivityEntity } from './activity.entity';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(ActivityEntity)
    private readonly activityRepository: Repository<ActivityEntity>,
  ) {}

  async createActivity(data: ActivityDto) {
    const activity = await this.activityRepository.create(data);
    return await this.activityRepository.save(activity);
  }

  async getAllActivities() {
    return await this.activityRepository.find({
      select: ['id'],
    });
  }

  async getActivityById(id: string) {
    try {
      return await this.activityRepository.findOneOrFail({
        where: { id: id },
      });
    } catch (error) {
      throw new NotFoundException(
        `Erro no código a seguir: \n\n${error.message}`,
      );
    }
  }

  async updateActivity(id: string, data: ActivityUpdateDto) {
    const activities = await this.activityRepository.findOne({
      where: { id },
    });
    this.activityRepository.merge(activities, data);
    return await this.activityRepository.save(activities);
  }

  async deleteActivity(id: string) {
    await this.activityRepository.findOne({ where: { id } });
    this.activityRepository.delete(id);
  }
}
