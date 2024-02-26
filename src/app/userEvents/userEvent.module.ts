import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityModule } from '../activities/activity.module';
import { UsersModule } from '../users/user.module';
import { UserEventsController } from './userEvent.controller';
import { UserEventEntity } from './userEvent.entity';
import { UserEventService } from './userEvent.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEventEntity]),
    UsersModule,
    ActivityModule,
  ],
  controllers: [UserEventsController],
  providers: [UserEventService],
  exports: [UserEventService],
})
export class UserEventsModule {}
