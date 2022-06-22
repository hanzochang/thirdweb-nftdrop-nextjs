import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../utils/theme'

// const chainId = ChainId.Goerli
const activeChainId: number = parseInt(`${process.env.NEXT_PUBLIC_CHAIN_ID}`)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
