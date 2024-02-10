import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDTO } from './dto/user.dto';
import { UserUpdateDTO } from './dto/user.update.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usuarioRepository: Repository<UserEntity>,
  ) {}

  async createUser(data: UserDTO) {
    const usuario = await this.usuarioRepository.create(data);
    return await this.usuarioRepository.save(usuario);
  }

  async getAllUsers() {
    return await this.usuarioRepository.find({
      select: ['id', 'name', 'email', 'cpf', 'type', 'admin'],
    });
  }

  async getUserById(id: string) {
    try {
      return await this.usuarioRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new NotFoundException(
        `Erro no código a seguir: \n\n${error.message}`,
      );
    }
  }

  async updateUser(id: string, data: UserUpdateDTO) {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });
    this.usuarioRepository.merge(usuario, data);
    return await this.usuarioRepository.save(usuario);
  }

  async deleteUser(id: string) {
    await this.usuarioRepository.findOne({ where: { id } });
    this.usuarioRepository.delete(id);
  }

  async getUserByEmail(email: string) {
    const usuario = await this.usuarioRepository.findOneOrFail({
      where: { email },
    });
    return usuario;
  }
}
