import { Box, Flex, Stack, Text } from '@chakra-ui/react';

import Navigation from './Navigation';

function Home() {
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
              <Text color={'main.100'} fontWeight={'bold'} fontSize={'24px'}>
                My Blocks
              </Text>
              <hr />
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
