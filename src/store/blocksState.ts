import { atom } from 'recoil';

import { Block } from '../types';

const blocksState = atom<Block[]>({
  key: 'blocksState',
  default: [],
});

export default blocksState;
