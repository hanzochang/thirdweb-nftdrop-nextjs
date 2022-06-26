import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import {
  discordUrl,
  explorerUrl,
  instagramUrl,
  openseaUrl,
  twitterUrl,
} from '../../utils/snsLinks'

const LinkIcon: React.FC<{
  func: () => string
  icon: string
}> = ({ func, icon }: { func: () => string; icon: string }) => {
  return (
    <>
      {!!func() && (
        <Box
          as="a"
          href={func()}
          target="_blank"
          rel="noreferrer"
          _hover={{
            opacity: 0.2,
          }}
          style={{
            height: 24,
          }}
          opacity={0.85}
          transitionDuration={'0.15s'}
        >
          <Image src={icon} width={24} height={24} alt="" />
        </Box>
      )}
    </>
  )
}

const Component: React.FC = () => {
  return (
    <Flex as="nav" gap={4}>
      <LinkIcon
        func={openseaUrl}
        icon={'/assets/logo/logo_black_opensea.svg'}
      />
      <LinkIcon
        func={explorerUrl}
        icon={'/assets/logo/logo_black_etherscan.svg'}
      />
      <LinkIcon
        func={twitterUrl}
        icon={'/assets/logo/logo_black_twitter.svg'}
      />
      <LinkIcon
        func={discordUrl}
        icon={'/assets/logo/logo_black_discord.svg'}
      />
      <LinkIcon
        func={instagramUrl}
        icon={'/assets/logo/logo_black_instagram.svg'}
      />
    </Flex>
  )
}

export { Component as SnsLinks }
