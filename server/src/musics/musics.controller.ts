import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { generateDummyCards } from 'src/moke/moke';

@Controller('api/musics')
export class MusicsController {
  @Get('/')
  getCards(@Req() req: Request, @Res() res: Response) {
    setTimeout(() => {
      const limit = Number(req.query.limit);
      const offset = Number(req.query.offset);
      res.json(generateDummyCards(limit, offset));
    }, 1000);
  }
}
