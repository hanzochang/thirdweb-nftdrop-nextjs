import { Box, Flex, Spinner, Text, VStack } from '@chakra-ui/react'

const Component = () => {
  return (
    <Box
      pt={20}
      zIndex={20}
      position="fixed"
      w="100%"
      h="100%"
      opacity={0.95}
      backgroundColor="black"
    >
      <Flex
        maxW={'8xl'}
        justifyContent="center"
        h="100%"
        alignItems="center"
        mx="auto"
      >
        <VStack spacing={4}>
          <Spinner size="xl" color="white" />
          <Text color="white">Claiming ...</Text>
        </VStack>
      </Flex>
    </Box>
  )
}

export { Component as Claiming }
