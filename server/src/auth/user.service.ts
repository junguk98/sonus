import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions } from 'typeorm';
import { UserDTO } from './dto/User.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { User } from 'src/entities/Users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async findByFields(
    options: FindOneOptions<UserDTO>,
  ): Promise<User | undefined> {
    return await this.userRepository.findOne(options);
  }

  async save(userDTO: UserDTO): Promise<UserDTO | undefined> {
    await this.transformPassword(userDTO);
    return await this.userRepository.save(userDTO);
  }

  async transformPassword(userDTO: UserDTO): Promise<void> {
    userDTO.password = await bcrypt.hash(userDTO.password, 10);
    return Promise.resolve();
  }

  async setRefreshToken(refreshToken: string, id: number) {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    await this.userRepository.update(id, { hashedRefreshToken });
  }

  async getUserIfRefreshTokenMatches(
    refreshToken: string,
    id: number,
  ): Promise<User | undefined> {
    const user = await this.findByFields({ where: { id: id } });
    const isRefreshTokenMatching = await bcrypt.compare(
      refreshToken,
      user.hashedRefreshToken,
    );
    if (isRefreshTokenMatching) return user;
  }

  async removeRefreshToken(user: any) {
    return this.userRepository.update(user.id, { hashedRefreshToken: null });
  }
}
