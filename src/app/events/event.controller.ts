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
import { EventDTO } from './dto/event.dto';
import { EventUpdateDTO } from './dto/event.update.dto';
import { EventService } from './event.service';

@Controller('api/evencomp/events')
export class EventController {
  constructor(private readonly eventService: EventService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post('add/:userId')
  async createEvent(@Param('userId') userId: string, @Body() body: EventDTO) {
    return await this.eventService.createEvent(body, userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('getAll')
  async getAllEvents() {
    return await this.eventService.getAllEvents();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('get/:id')
  async getEventById(@Param('id') id: string) {
    return await this.eventService.getEventById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('update/:id')
  async updateEvent(@Param('id') id: string, @Body() body: EventUpdateDTO) {
    return await this.eventService.updateEvent(id, body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('delete/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteEvent(@Param('id') id: string) {
    return await this.eventService.deleteEvent(id);
  }
}
