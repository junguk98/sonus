import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ClientMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    const { baseUrl } = req;
    if (baseUrl.includes('/api')) {
      next();
    } else next();
  }
}
