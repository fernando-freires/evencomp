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
import { CoordinatorDto } from './dto/coordinator.dto';
import { CoordinatorUpdateDto } from './dto/coordinator.update.dto';
import { CoordinatorService } from './coordinator.service';

@Controller('api/evencomp/coordinators')
export class CoordinatorController {
  constructor(private readonly coordinatorsService: CoordinatorService) {}
  @Post('add')
  async createCoordinator(@Body() body: CoordinatorDto) {
    return await this.coordinatorsService.createCoordinator(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('getAll')
  async getAllCoordinators() {
    return await this.coordinatorsService.getAllCoordinators();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('get/:id')
  async getCoordinatorById(@Param('id') id: string) {
    return await this.coordinatorsService.getCoordinatorById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('update/:id')
  async updateCoordinator(
    @Param('id') id: string,
    @Body() body: CoordinatorUpdateDto,
  ) {
    return await this.coordinatorsService.updateCoordinator(id, body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('delete/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteCoordinator(@Param('id') id: string) {
    return await this.coordinatorsService.deleteCoordinator(id);
  }
}
