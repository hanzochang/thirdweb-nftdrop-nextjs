import { Flex, Spinner, Text, VStack } from '@chakra-ui/react'

const Component = () => {
  return (
    <Flex
      maxW={'8xl'}
      justifyContent="center"
      h="100%"
      alignItems="center"
      mx="auto"
    >
      <VStack spacing={4}>
        <Spinner size="xl" />
        <Text>Loading contract ...</Text>
      </VStack>
    </Flex>
  )
}

export { Component as Loading }
