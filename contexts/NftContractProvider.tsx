import {
  useAddress,
  useMetamask,
  useNetwork,
  useNetworkMismatch,
  useNFTDrop,
} from '@thirdweb-dev/react'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { ethers } from 'ethers'

type Store = {
  isLoading: boolean
  allTokens: Array<any>
  isClaiming: boolean
  setIsClaiming?: Dispatch<SetStateAction<boolean>>
  spMenuOpened: boolean
  setSpMenuOpened?: Dispatch<SetStateAction<boolean>>
  ownedTokens: Array<any>
  setOwnedTokens?: Dispatch<SetStateAction<boolean>>
  claimPrice: string
}

export const NftContractContext = createContext<Store>({
  isLoading: true,
  allTokens: [],
  isClaiming: false,
  spMenuOpened: false,
  ownedTokens: [],
  claimPrice: '',
})

type Props = {
  children: React.ReactNode
}

const Component: React.FC<Props> = ({ children }: Props) => {
  const nftDrop = useNFTDrop(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS)

  const address = useAddress()
  const [allTokens, setAllTokens] = useState<Array<any>>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isClaiming, setIsClaiming] = useState<boolean>(false)
  const [spMenuOpened, setSpMenuOpened] = useState<boolean>(false)
  const [ownedTokens, setOwnedTokens] = useState<Array<any>>([])
  const [claimPrice, setClaimPrice] = useState<string>('')

  useEffect(() => {
    nftDrop?.getAll().then((results) => {
      setAllTokens(results)
      setIsLoading(false)
    })

    nftDrop?.claimConditions.getActive().then((activeClaimCondition) => {
      setClaimPrice(ethers.utils.formatUnits(activeClaimCondition.price._hex))
    })
  }, [])

  useEffect(() => {
    if (address) {
      let owneds: Array<any> = []

      allTokens.map((token) => {
        if (token.owner == address) {
          owneds.push(token)
        }
      })

      setOwnedTokens(owneds)
    }
  }, [allTokens])

  useEffect(() => {
    // TODO transaction終了時のみにする
    nftDrop?.getAll().then((results) => {
      setAllTokens(results)
      setIsLoading(false)
    })

    nftDrop?.claimConditions.getActive().then((activeClaimCondition) => {
      setClaimPrice(ethers.utils.formatUnits(activeClaimCondition.price._hex))
    })
  }, [isClaiming])

  const store: Store = {
    isLoading,
    allTokens,
    isClaiming,
    setIsClaiming,
    spMenuOpened,
    setSpMenuOpened,
    ownedTokens,
    claimPrice,
  }

  return (
    <NftContractContext.Provider value={store}>
      {children}
    </NftContractContext.Provider>
  )
}

export { Component as NftContractProvider }
