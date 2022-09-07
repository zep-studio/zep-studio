import { atom } from 'recoil';

import { SCRIPTAPP_LIFECYCLE_ON_INIT } from '../blocks/scriptapp';
import { BlockDraft } from '../components/zep-studio-blocks/types';

export const blocksState = atom<BlockDraft[]>({
  key: 'blocksState',
  default: [
    {
      id: 'genesis',
      type: 'trigger',
      trigger: SCRIPTAPP_LIFECYCLE_ON_INIT,
    },
  ],
});
