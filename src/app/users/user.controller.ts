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
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { UserUpdateDTO } from './dto/user.update.dto';

@Controller('api/evencomp/users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('add')
  async createUser(@Body() body: UserDTO) {
    return await this.userService.createUser(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('getAll')
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('get/:id')
  async getUserById(@Param('id') id: string) {
    return await this.userService.getUserById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('update/:id')
  async updateUser(@Param('id') id: string, @Body() body: UserUpdateDTO) {
    return await this.userService.updateUser(id, body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('delete/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUser(@Param('id') id: string) {
    return await this.userService.deleteUser(id);
  }
}
