import { useNFTDrop, useAddress, useMetamask } from '@thirdweb-dev/react'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'

const Component: React.FC = () => {
  const nftDrop = useNFTDrop(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS)
  const [mintPrice, setMintPrice] = useState<string>('')
  const address = useAddress()
  const connectWithMetamask = useMetamask()

  useEffect(() => {
    nftDrop?.claimConditions.getActive().then((activeClaimCondition) => {
      setMintPrice(ethers.utils.formatUnits(activeClaimCondition.price._hex))
    })
  }, [])

  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: 16,
          left: 0,
          width: '100%',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {address ? (
          <button
            style={{ margin: '0 auto' }}
            onClick={async () => {
              if (nftDrop) {
                const txs = await nftDrop.claimTo(address, 1)
                txs.map((tx) => {
                  tx.data().then((data) => console.log('nft', data))
                })
              }
            }}
          >
            購入 ({mintPrice}ETH)
          </button>
        ) : (
          <button style={{ margin: '0 auto' }} onClick={connectWithMetamask}>
            Walletに接続する
          </button>
        )}
      </div>
    </>
  )
}

export { Component as MintButton }
