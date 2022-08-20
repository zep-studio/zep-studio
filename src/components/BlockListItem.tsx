import { Text } from '@chakra-ui/react';

import { Block } from '../types';

function BlockListItem({ block }: { block: Block }) {
  return <Text>{block.name}</Text>;
}

export default BlockListItem;
