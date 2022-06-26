import { Box } from '@chakra-ui/react'
import type { ReactElement } from 'react'
import { useContext } from 'react'
import { Claiming } from '../components/elements/Claiming'
import { Header } from '../components/elements/Header'
import { Loading } from '../components/elements/Loading'
import { SpMenu } from '../components/elements/SpMenu'
import { NftContractContext } from '../contexts/NftContractProvider'

const Layout = ({ children }: { children: ReactElement }) => {
  const store = useContext(NftContractContext)

  return (
    <Box minH="100vh" backgroundColor="white" position="relative">
      <Header />
      {store.spMenuOpened && <SpMenu />}
      {store.isClaiming && <Claiming />}
      <Box
        pt={{ base: 12, md: 20 }}
        px={{ base: 4, md: 3 }}
        h="calc(100vh)"
        zIndex={2}
        position="relative"
      >
        {store.isLoading ? <Loading /> : <>{children}</>}
      </Box>
    </Box>
  )
}

export { Layout as CommonLayout }
