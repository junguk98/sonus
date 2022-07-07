import { Exclude } from 'class-transformer';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Music } from './Musics.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  @Exclude()
  hashedRefreshToken?: string;

  @OneToMany(() => Music, (music) => music.user)
  musics: Music[];
}
