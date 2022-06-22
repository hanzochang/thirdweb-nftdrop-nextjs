import { Box, Flex, Text, Grid, Button } from '@chakra-ui/react'

const Component: React.FC = () => {
  return (
    <Box minH="100vh" backgroundColor={'blue.100'} position="relative">
      <Box
        as="header"
        backgroundColor="tomato"
        alignItems="center"
        position={'fixed'}
        w="full"
      >
        <Flex
          maxW={'8xl'}
          justifyContent="space-between"
          h={20}
          px={3}
          alignItems="center"
          mx="auto"
        >
          <Text textStyle="md">NFTDrop</Text>
          <Flex alignItems="center" gap={8}>
            <Flex as="nav" gap={2}>
              <Text as="a">MINT</Text>
              <Text as="a">COLLECTION</Text>
              <Text as="a">YOURS</Text>
            </Flex>
            <Button>Connect Wallet</Button>
          </Flex>
        </Flex>
      </Box>
      <Box pt={20} h="calc(100vh)">
        <Flex
          maxW={'8xl'}
          justifyContent="center"
          h="full"
          alignItems="center"
          mx="auto"
        >
          <div>
            <Button mb="2">MINT MINT MINT</Button>
            <Box textAlign={'center'}>price : 0.001ETH</Box>
          </div>
        </Flex>
      </Box>
    </Box>
  )
}

export { Component as Minting }
