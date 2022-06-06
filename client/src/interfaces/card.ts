import { User } from './user';

export interface CardItem {
  id: number;
  title: string;
  albumImgUrl: string;
  user: User;
  plays: number;
  likes: number;
  comments: number;
}
