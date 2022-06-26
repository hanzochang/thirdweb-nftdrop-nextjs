import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SnsLinks } from './SnsLinks'
import { Wallet } from './Wallet'
import { NftContractContext } from '../../contexts/NftContractProvider'
import { useContext } from 'react'

const Component: React.FC = () => {
  const router = useRouter()
  const store = useContext(NftContractContext)

  return (
    <Box
      as="header"
      alignItems="center"
      position={'fixed'}
      background="rgba(255, 255, 255, 0.95)"
      backdropBlur="md"
      w="full"
      zIndex={10}
    >
      <Flex
        maxW={'8xl'}
        justifyContent="space-between"
        h={{ base: 16, md: 20 }}
        px={{ base: 4, xl: 3, '2xl': 0 }}
        alignItems="center"
        mx="auto"
      >
        <Link href="/">
          <Text textStyle="logo" cursor="pointer">
            NFTDrop
          </Text>
        </Link>
        <Flex alignItems="center" gap={8}>
          <Box display={{ base: 'none', lg: 'block' }}>
            <Flex as="nav" gap={6}>
              <Link href="/">
                <Text
                  as="a"
                  borderBottom={`2px`}
                  borderColor={
                    router.pathname === '/' ? `black` : 'rgba(0,0,0,0)'
                  }
                  fontWeight="bold"
                  cursor="pointer"
                >
                  MINT
                </Text>
              </Link>
              <Link href="/collection">
                <Text
                  as="a"
                  borderBottom={`2px`}
                  borderColor={
                    router.pathname === '/collection'
                      ? `black`
                      : 'rgba(0,0,0,0)'
                  }
                  fontWeight="bold"
                  cursor="pointer"
                >
                  COLLECTION
                </Text>
              </Link>
              <Link href="/owned">
                <Text
                  as="a"
                  borderBottom={`2px`}
                  borderColor={
                    router.pathname === '/owned' ? `black` : 'rgba(0,0,0,0)'
                  }
                  fontWeight="bold"
                  cursor="pointer"
                >
                  OWNED
                </Text>
              </Link>
            </Flex>
          </Box>
          <Box display={{ base: 'none', lg: 'block' }}>
            <SnsLinks />
          </Box>
          <Box display={{ base: 'none', lg: 'block' }}>
            <Wallet />
          </Box>
          <Box
            display={{ base: 'block', lg: 'none' }}
            height="32px"
            onClick={() => {
              store.setSpMenuOpened && store.setSpMenuOpened(true)
            }}
          >
            <Image
              src="/assets/icon/icon_black_menu.svg"
              width={32}
              height={32}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export { Component as Header }
