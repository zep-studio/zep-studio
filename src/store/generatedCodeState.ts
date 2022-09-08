import { atom } from 'recoil';

export const generatedCodeState = atom<string>({
  key: 'generatedCodeState',
  default: '',
});
