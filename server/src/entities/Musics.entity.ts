import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './Users.entity';

@Entity('music')
export class Music {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  albumImgUrl: string;

  @Column()
  plays: number;

  @ManyToOne(() => User, (user) => user.musics)
  user: User;
}
