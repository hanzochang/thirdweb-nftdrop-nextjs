import { Flex, Text, VStack } from '@chakra-ui/react'

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
        <Text>No Items</Text>
      </VStack>
    </Flex>
  )
}

export { Component as NoListItems }
