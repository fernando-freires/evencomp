import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CoordinatorDto } from './dto/coordinator.dto';
import { CoordinatorUpdateDto } from './dto/coordinator.update.dto';
import { CoordinatorEntity } from './coordinator.entity';

@Injectable()
export class CoordinatorService {
  constructor(
    @InjectRepository(CoordinatorEntity)
    private readonly coordinatorRepository: Repository<CoordinatorEntity>,
  ) {}

  async createCoordinator(data: CoordinatorDto) {
    const coordinator = await this.coordinatorRepository.create(data);
    return await this.coordinatorRepository.save(coordinator);
  }

  async getAllCoordinators() {
    return await this.coordinatorRepository.find({
      select: ['id'],
    });
  }

  async getCoordinatorById(id: string) {
    try {
      return await this.coordinatorRepository.findOneOrFail({
        where: { id: id },
      });
    } catch (error) {
      throw new NotFoundException(
        `Erro no código a seguir: \n\n${error.message}`,
      );
    }
  }

  async updateCoordinator(id: string, data: CoordinatorUpdateDto) {
    const coordinators = await this.coordinatorRepository.findOne({
      where: { id },
    });
    this.coordinatorRepository.merge(coordinators, data);
    return await this.coordinatorRepository.save(coordinators);
  }

  async deleteCoordinator(id: string) {
    await this.coordinatorRepository.findOne({ where: { id } });
    this.coordinatorRepository.delete(id);
  }
}
