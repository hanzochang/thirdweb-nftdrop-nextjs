import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { SnsLinks } from './SnsLinks'

const Component: React.FC = () => {
  return (
    <Box
      as="footer"
      alignItems="center"
      w="full"
      zIndex={10}
      borderTop={2}
      borderTopColor="blackAlpha.300"
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
          <SnsLinks />
        </Flex>
      </Flex>
    </Box>
  )
}

export { Component as Footer }
