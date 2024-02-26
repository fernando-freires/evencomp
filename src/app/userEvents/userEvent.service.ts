import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../users/user.service';
import { UserEventsDto } from './dto/userEvent.dto';
import { UserEventEntity } from './userEvent.entity';
import { ActivityService } from '../activities/activity.service';

@Injectable()
export class UserEventService {
  constructor(
    @InjectRepository(UserEventEntity)
    private readonly userEventRepository: Repository<UserEventEntity>,
    private readonly userService: UserService,
    private readonly activityService: ActivityService,
  ) {}

  async createUserEvent(data: UserEventsDto) {
    const activity = await this.activityService.getActivityById(
      data.activity_id,
    );

    const activitySubscribers = await this.getLengthOfUsersSubscribedByActivity(
      data.activity_id,
    );

    if (activitySubscribers < activity.subscribersLimit) {
      const evento = await this.userEventRepository.create(data);
      return await this.userEventRepository.save(evento);
    } else {
      await this.activityService.updateActivity(data.activity_id, {
        title: activity.title,
        description: activity.description,
        dateStart: activity.dateStart,
        dateEnd: activity.dateEnd,
        location: activity.location,
        duration: activity.duration,
        event_id: activity.event_id,
        category: activity.category,
        speaker: activity.speaker,
        startTime: activity.startTime,
        status: false,
        subscribersLimit: activity.subscribersLimit,
      });
    }
  }

  async getAllUserEvents(userId: string) {
    return await this.userEventRepository.find({
      where: { user_id: userId },
      select: ['id', 'activity_id'],
    });
  }

  async getUserEventById(id: string) {
    try {
      return await this.userEventRepository.findOneOrFail({
        where: { id: id },
      });
    } catch (error) {
      throw new NotFoundException(
        `Erro no código a seguir: \n\n${error.message}`,
      );
    }
  }

  async updateUserEvent(id: string, data: UserEventsDto) {
    const eventos = await this.userEventRepository.findOne({ where: { id } });
    this.userEventRepository.merge(eventos, data);
    return await this.userEventRepository.save(eventos);
  }

  async deleteUserEvent(id: string) {
    await this.userEventRepository.findOne({ where: { id } });
    this.userEventRepository.delete(id);
  }

  async getLengthOfUsersSubscribedByActivity(activityId: string) {
    const test = await this.userEventRepository.find({
      where: { activity_id: activityId },
    });

    return test.length;
  }
}
