import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { NextRouter, useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { NftContractContext } from '../../contexts/NftContractProvider'
import { SnsLinks } from './SnsLinks'
import { motion } from 'framer-motion'

const LinkListItem: React.FC<{
  path: string
  router: NextRouter
  name: string
  closeSpMenu: () => void
}> = ({ path, router, name, closeSpMenu }) => {
  const onClick = () => {
    closeSpMenu()
    router.push(path)
  }

  return (
    <button onClick={onClick}>
      <Text
        as="a"
        borderBottom={`2px`}
        borderColor={router.pathname === path ? `black` : 'rgba(0,0,0,0)'}
        fontWeight="bold"
        cursor="pointer"
      >
        {name}
      </Text>
    </button>
  )
}

const Component: React.FC = () => {
  const router = useRouter()
  const store = useContext(NftContractContext)
  const [isOpen, setIsOpen] = useState(false)
  const closeDuration = 0.2

  useEffect(() => {
    if (store.spMenuOpened == true) {
      setIsOpen(true)
    }
  }, [store.spMenuOpened])

  const closeSpMenu = () => {
    setIsOpen(false)
    setTimeout(() => {
      store.setSpMenuOpened && store.setSpMenuOpened(false)
    }, closeDuration * 1000 + 100)
  }

  return (
    <Box zIndex={20} position="fixed" w="100%" h="100%">
      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        initial={{ opacity: 0, x: 0 }}
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: 0 },
        }}
        transition={{ duration: closeDuration }}
        style={{ height: '100%' }}
      >
        <Box pt={20} zIndex={20} w="100%" h="100%" backgroundColor="white">
          <Flex
            position="absolute"
            top={12}
            left={0}
            justifyContent="center"
            w="100%"
          >
            <Box onClick={closeSpMenu}>
              <Image
                src="/assets/icon/icon_black_close.svg"
                width={24}
                height={24}
                alt=""
              />
            </Box>
          </Flex>
          <Flex
            maxW={'8xl'}
            justifyContent="center"
            h="100%"
            alignItems="center"
            mx="auto"
          >
            <VStack spacing={20} pb={20}>
              <LinkListItem
                router={router}
                path={'/'}
                name={'MINT'}
                closeSpMenu={closeSpMenu}
              />
              <LinkListItem
                router={router}
                path={'/collection'}
                name={'COLLECTION'}
                closeSpMenu={closeSpMenu}
              />
              <LinkListItem
                router={router}
                path={'/owned'}
                name={'OWNED'}
                closeSpMenu={closeSpMenu}
              />
            </VStack>
          </Flex>
          <Flex
            position="absolute"
            bottom={12}
            left={0}
            justifyContent="center"
            w="100%"
          >
            <SnsLinks />
          </Flex>
        </Box>
      </motion.div>
    </Box>
  )
}

export { Component as SpMenu }
