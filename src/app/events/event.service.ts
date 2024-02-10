import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from './event.entity';
import { EventDTO } from './dto/event.dto';
import { EventUpdateDTO } from './dto/event.update.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepository: Repository<EventEntity>,
  ) {}

  async createEvent(data: EventDTO) {
    const evento = await this.eventRepository.create(data);
    return await this.eventRepository.save(evento);
  }

  async getAllEvents() {
    return await this.eventRepository.find({
      select: [
        'id',
        'name',
        'description',
        'dateStart',
        'dateEnd',
        'location',
        'group',
      ],
    });
  }

  async getEventById(id: string) {
    try {
      return await this.eventRepository.findOneOrFail({ where: { id: id } });
    } catch (error) {
      throw new NotFoundException(
        `Erro no código a seguir: \n\n${error.message}`,
      );
    }
  }

  async updateEvent(id: string, data: EventUpdateDTO) {
    const eventos = await this.eventRepository.findOne({ where: { id } });
    this.eventRepository.merge(eventos, data);
    return await this.eventRepository.save(eventos);
  }

  async deleteEvent(id: string) {
    await this.eventRepository.findOne({ where: { id } });
    this.eventRepository.delete(id);
  }
}
