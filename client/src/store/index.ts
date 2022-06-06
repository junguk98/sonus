import { User } from 'interfaces/user';
import { atom } from 'recoil';

export const userState = atom<User | undefined>({
  key: 'userState',
  default: undefined,
});

export const audioState = atom<string>({
  key: 'audioState',
  default: '',
});

export const playState = atom<boolean>({
  key: 'playState',
  default: false,
});

export const volumeState = atom<number>({
  key: 'volumeState',
  default: 50,
});

export const muteState = atom<boolean>({
  key: 'muteState',
  default: false,
});
