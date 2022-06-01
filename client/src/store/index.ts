import { User } from 'interfaces/user';
import { atom } from 'recoil';

export const userState = atom<User | undefined>({
  key: 'userState',
  default: undefined,
});
