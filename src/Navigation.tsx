import { Button, Center, Flex, Stack, Text } from '@chakra-ui/react';

function Navigation() {
  return (
    <Flex
      h="68px"
      bg={'nav.dark'}
      color={'white'}
      p={3}
      justify={'space-between'}
    >
      <Stack alignItems={'center'}>
        <Center>
          <Text fontSize={24}>ZEP Studio</Text>
        </Center>
      </Stack>
      <Stack>
        <Button bg={'blue.500'}>Publish</Button>
      </Stack>
    </Flex>
  );
}

export default Navigation;
