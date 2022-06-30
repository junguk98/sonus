import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserDTO } from './dto/User.dto';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { Payload } from './security/payload.interface';
import { User } from 'src/entities/Users.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async registerUser(newUser: UserDTO): Promise<UserDTO> {
    const userFind: UserDTO = await this.userService.findByFields({
      where: { email: newUser.email },
    });
    if (userFind) throw new ForbiddenException('email is used');
    return this.userService.save(newUser);
  }

  async validateUser(userDTO: UserDTO): Promise<Payload | undefined> {
    const userFind: User = await this.userService.findByFields({
      where: { email: userDTO.email },
    });
    if (!userFind) throw new UnauthorizedException();
    const validatePassword = await bcrypt.compare(
      userDTO.password,
      userFind.password,
    );
    if (!validatePassword) throw new UnauthorizedException();

    const payload: Payload = { id: userFind.id, email: userFind.email };
    return payload;
  }

  async tokenValidateUser(payload: Payload): Promise<User | undefined> {
    return await this.userService.findByFields({
      where: { id: payload.id },
    });
  }

  getJwtAccessToken(id: number) {
    const payload = { id };
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: `${process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME}s`,
    });
    return {
      Authorization: token,
    };
  }

  getJwtRefreshToken(id: number) {
    const payload = { id };
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: `${process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME}s`,
    });

    return {
      refreshToken: token,
      httpOnly: true,
      maxAge: Number(process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME) * 1000,
    };
  }
}
