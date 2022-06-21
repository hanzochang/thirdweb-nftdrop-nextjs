import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
import { useState } from 'react'

const truncate = (str: string, len: number) => {
  return str.length <= len ? str : str.substr(0, len) + '...'
}

const Component: React.FC = () => {
  const address = useAddress()
  const connectWithMetamask = useMetamask()
  const disconnectWallet = useDisconnect()

  const [addressHovering, setAddressHovering] = useState(false)

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div>NFTDrop</div>
      {address ? (
        <>
          <div
            onMouseEnter={() => setAddressHovering(true)}
            onMouseLeave={() => setAddressHovering(false)}
          >
            {addressHovering ? (
              <button onClick={disconnectWallet}>Disconnect Wallet</button>
            ) : (
              <p>Your address: {truncate(address, 10)}</p>
            )}
          </div>
        </>
      ) : (
        <div
          onMouseEnter={() => setAddressHovering(true)}
          onMouseLeave={() => setAddressHovering(false)}
        >
          <button onClick={connectWithMetamask}>Connect with Metamask</button>
        </div>
      )}
    </div>
  )
}

export { Component as Wallet }
