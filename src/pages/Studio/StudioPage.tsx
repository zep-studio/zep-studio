import { Box, Flex, Stack } from '@chakra-ui/react';

import Navigation from '../../components/Navigation';
import { ConditionEndBlock } from '../../components/zep-studio-blocks/ConditionEndBlock';
import { ConditionForkBlock } from '../../components/zep-studio-blocks/ConditionForkBlock';
import { ConditionStartBlock } from '../../components/zep-studio-blocks/ConditionStartBlock';
import { TriggerBlock } from '../../components/zep-studio-blocks/TriggerBlock';
import { BasicActionBlock } from '../../components/zep-studio-blocks/actions/BasicActionBlock';
import { RepeatActionBlock } from '../../components/zep-studio-blocks/actions/RepeatActionBlock';

export const StudioPage: React.FC = () => {
  return (
    <main>
      <Navigation />
      <Box>
        <Flex h="100vh">
          <Stack w="full" h="full" padding="54px" bg={'gray.200'}>
            <TriggerBlock />
            <ConditionStartBlock />
            <ConditionForkBlock satisfied>
              <BasicActionBlock />
            </ConditionForkBlock>
            <ConditionForkBlock satisfied={false}>
              <RepeatActionBlock>
                <BasicActionBlock />
                <BasicActionBlock />
              </RepeatActionBlock>
            </ConditionForkBlock>
            <ConditionEndBlock />
          </Stack>
          <Stack
            w="25vw"
            h="full"
            spacing={10}
            alignItems="flex-start"
            bg={'gray.600'}
          ></Stack>
        </Flex>
      </Box>
    </main>
  );
};
