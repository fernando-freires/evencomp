import { Module } from '@nestjs/common';
import { CoordinatorController } from './coordinator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoordinatorEntity } from './coordinator.entity';
import { CoordinatorService } from './coordinator.service';

@Module({
  imports: [TypeOrmModule.forFeature([CoordinatorEntity])],
  controllers: [CoordinatorController],
  providers: [CoordinatorService],
  exports: [CoordinatorService],
})
export class CoordinatorsModule {}
