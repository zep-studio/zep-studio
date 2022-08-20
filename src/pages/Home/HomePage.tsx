import { Box, Flex, Stack } from '@chakra-ui/react';

import Navigation from '../../components/Navigation';

function Home() {
  return (
    <div className="App">
      <main>
        <Navigation />
        <Box>
          <Flex h="100vh">
            <Stack
              w="full"
              h="full"
              spacing={10}
              alignItems="flex-start"
              bg={'gray.200'}
            ></Stack>
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
    </div>
  );
}

export default Home;
