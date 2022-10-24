import { useAddress, useContract, useNFTDrop } from '@thirdweb-dev/react'
import { useEffect, useState } from 'react'
import { NULL_ADDRESS } from '../../utils/const'

const Component: React.FC = () => {
  const { data: nftDrop } = useContract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    'nft-drop'
  )
  const [allTokens, setAllTokens] = useState<Array<any>>([])
  const [mintPrice, setMintPrice] = useState<string>('')
  const address = useAddress()

  useEffect(() => {
    nftDrop?.claimConditions.getActive().then((activeClaimCondition) => {
      setMintPrice(activeClaimCondition.price._hex)
    })

    nftDrop?.getAll().then((results) => {
      setAllTokens(results)
    })
  }, [nftDrop])

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
          gap: '0.5rem',
        }}
      >
        {allTokens.map((token, index) => {
          const ownerExists: boolean = token.owner !== NULL_ADDRESS
          return (
            <div style={{ position: 'relative' }} key={index}>
              <h4>{token.metadata.name}</h4>
              <img style={{ width: '100%' }} src={token.metadata.image} />
              <div>
                {!ownerExists ? (
                  <>
                    No Owner
                    <br />
                    <br />
                  </>
                ) : (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://rinkeby.etherscan.io/address/${token.owner}`}
                    style={{ overflowWrap: 'break-word' }}
                  >
                    {token.owner}
                  </a>
                )}
              </div>
              <div>owner? : {token.owner === address ? 'true' : 'false'}</div>
              <div></div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export { Component as NFTList }
