import { atom } from 'recoil';

export const selectorState = atom<string | null>({
  key: '@selectorState',
  default: null,
});
