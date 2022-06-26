import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { NULL_ADDRESS } from '../../utils/const'
import { NftImage } from './NftImage'

export type NftListItemProps = {
  // TODO Define correct nft type
  token: any
}

const Component: React.FC<NftListItemProps> = ({ token }) => {
  return (
    <Box position="relative">
      <Box opacity={token.owner === NULL_ADDRESS ? 0.2 : 1.0}>
        <NftImage imageUri={token.metadata.image} />
      </Box>
      <Text
        as="h4"
        fontSize={{ base: 'sm', md: 'lg' }}
        mt={2}
        textAlign="center"
        fontWeight="bold"
      >
        {token.metadata.name}
      </Text>
    </Box>
  )
}

export { Component as NftListItem }
