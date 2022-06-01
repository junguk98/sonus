import { User } from './user';

export interface CardItem {
  id: number;
  User: User;
  title: string;
  imageUrl: string;
}
