import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';

import Navigation from './Navigation';
import BlockListItem from './components/BlockListItem';
import blocksState from './store/blocksState';
import { Block } from './types';

function Home() {
  const [blocks, setBlocks] = useRecoilState<Block[]>(blocksState);

  const handleCreateBlock = () => {
    setBlocks([
      ...blocks,
      {
        name: `Block #${blocks.length + 1}`,
      },
    ]);
  };

  return (
    <div className="App">
      <main>
        <Navigation />
        <Box>
          <Flex h="100vh">
            <Stack
              w="390px"
              h="full"
              spacing={10}
              alignItems="flex-start"
              p={5}
            >
              <Text
                color={'main.100'}
                fontWeight={'bold'}
                fontSize={'24px'}
                w="full"
                textAlign={'left'}
                paddingBottom={'10px'}
                borderBottom={'2px solid'}
                borderColor={'main.100'}
              >
                My Blocks
              </Text>

              <Button
                w="full"
                size={'lg'}
                bg={'gray.200'}
                onClick={handleCreateBlock}
              >
                Create a new block
              </Button>

              {blocks.map((block) => {
                return <BlockListItem key={block.name} block={block} />;
              })}
            </Stack>
            <Stack
              w="full"
              h="full"
              spacing={10}
              alignItems="flex-start"
              bg={'gray.200'}
            >
              <Text>2</Text>
            </Stack>
            <Stack
              w="420px"
              h="full"
              spacing={10}
              alignItems="flex-start"
              bg={'gray.600'}
            >
              <Text>3</Text>
            </Stack>
          </Flex>
        </Box>
      </main>
    </div>
  );
}

export default Home;
