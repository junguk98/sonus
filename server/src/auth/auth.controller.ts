import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { User } from 'src/entities/Users.entity';
import { AuthService } from './auth.service';
import { UserDTO } from './dto/User.dto';
import { AuthGuard } from './security/auth.guard';
import { JwtRefreshGuard } from './security/jwt-refresh.guard';
import { UserService } from './user.service';

@Controller('api/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Get('/testcall')
  testcall(@Req() req: Request, @Res() res: Response) {
    console.log(req.headers);
    return res.send({
      message: 'testcall success',
    });
  }

  @Post('/register')
  async registerAccount(
    @Req() req: Request,
    @Body() userDTO: UserDTO,
  ): Promise<any> {
    return await this.authService.registerUser(userDTO);
  }

  @Post('/login')
  async login(@Body() userDTO: UserDTO, @Res() res: Response): Promise<any> {
    console.log(userDTO);
    const { id: userId } = await this.authService.validateUser(userDTO);
    const { Authorization } = this.authService.getJwtAccessToken(userId);
    const { refreshToken, ...refreshOption } =
      this.authService.getJwtRefreshToken(userId);
    await this.userService.setRefreshToken(refreshToken, userId);
    const user: User = await this.userService.getUserIfRefreshTokenMatches(
      refreshToken,
      userId,
    );
    res.cookie('userId', userId, refreshOption);
    res.cookie('Refresh', refreshToken, refreshOption);
    return res.send({ Authorization: Authorization, user: user });
  }

  @Post('/silent-refresh')
  @UseGuards(JwtRefreshGuard)
  async silentRefresh(@Req() req: Request, @Res() res: Response): Promise<any> {
    const oldRefreshToken = req.cookies.Refresh;
    const userId = req.cookies.userId;

    console.log(oldRefreshToken);
    console.log(userId);
    const user: User = await this.userService.getUserIfRefreshTokenMatches(
      oldRefreshToken,
      userId,
    );

    const { Authorization } = this.authService.getJwtAccessToken(userId);
    const { refreshToken, ...refreshOption } =
      this.authService.getJwtRefreshToken(userId);
    await this.userService.setRefreshToken(refreshToken, userId);
    res.cookie('userId', userId, refreshOption);
    res.cookie('Refresh', refreshToken, refreshOption);

    return res.send({ Authorization: Authorization, user: user });
  }

  @Post('/logout')
  @UseGuards(JwtRefreshGuard)
  async logout(@Req() req: Request, @Res() res: Response): Promise<any> {
    await this.userService.removeRefreshToken(req.user);
    res.cookie('userId', '', {
      maxAge: 0,
    });
    res.cookie('Refresh', '', {
      maxAge: 0,
    });
    return res.send({
      message: 'logout success',
    });
  }

  @Get('/authenticate')
  @UseGuards(AuthGuard)
  isAuthenticated(@Req() req: Request): any {
    const user: any = req.user;
    return user;
  }

  @Get('/cookies')
  getCookies(@Req() req: Request, @Res() res: Response): any {
    const jwt = req.cookies['jwt'];
    return res.send(jwt);
  }
}
