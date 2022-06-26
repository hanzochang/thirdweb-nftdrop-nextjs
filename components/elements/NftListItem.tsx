import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { NftImage } from './NftImage'

export type NftListItemProps = {
  // TODO Define correct nft type
  token: any
}

const Component: React.FC<NftListItemProps> = ({ token }) => {
  return (
    <Box position="relative">
      <NftImage imageUri={token.metadata.image} />
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
