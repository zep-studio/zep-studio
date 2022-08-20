import '@chakra-ui/react';
import './App.css';

import {
  Box,
  Button,
  Center,
  Flex,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <main>
        <Navigation />
        <Box>
          <Flex h="100vh">
            <Stack w="390px" h="full" spacing={10} alignItems="flex-start">
              <Text>My Blocks</Text>
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
