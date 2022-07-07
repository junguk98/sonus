import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';
import { Music } from 'src/entities/Musics.entity';
import { User } from 'src/entities/Users.entity';

export const ormconfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User, Music],
  synchronize: true,
};
