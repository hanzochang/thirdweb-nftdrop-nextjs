import {
  useAddress,
  useMetamask,
  useNetwork,
  useNetworkMismatch,
} from '@thirdweb-dev/react'

export const useConnectWallet = () => {
  const address = useAddress()
  const connectWithMetamask = useMetamask()

  const [, switchNetwork] = useNetwork()
  const isOnWrongNetwork = useNetworkMismatch()

  const connectWallet = () => {
    if (!address) {
      connectWithMetamask()
      return
    }

    if (isOnWrongNetwork) {
      switchNetwork && switchNetwork(Number(process.env.NEXT_PUBLIC_CHAIN_ID))
      return
    }
  }

  return { address, connectWallet }
}
