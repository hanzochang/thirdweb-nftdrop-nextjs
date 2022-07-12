export const explorerUrl = () => {
  const address = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS

  switch (process.env.NEXT_PUBLIC_CHAIN_ID) {
    case '1':
      // Mainnet
      return `https://etherscan.io/token/${address}`
    case '4':
      // Rinkeby
      return `https://rinkeby.etherscan.io/token/${address}`
    case '5':
      // Goerli
      return `https://goerli.etherscan.io/token/${address}`
    case '137':
      // Polygon
      return `https://polygonscan.com/token/${address}`
    case '80001':
      // Munbai
      return `https://mumbai.polygonscan.com/token/${address}`
    case '1666600000':
      // Harmony
      return `https://explorer.harmony.one/address/${address}`
    default:
      return ''
  }
}

export const openseaUrl = () => {
  const name = process.env.NEXT_PUBLIC_CONTRACT_NAME

  switch (process.env.NEXT_PUBLIC_CHAIN_ID) {
    case '1':
      // Mainnet
      return `https://opensea.io/collection/${name}`
    case '4':
      // Rinkeby
      return `https://testnets.opensea.io/collection/${name}`
    default:
      return ``
  }
}

export const twitterUrl = () => {
  return `https://twitter.com/${process.env.NEXT_PUBLIC_TWITER_ACCOUNT}`
}

export const instagramUrl = () => {
  return `https://www.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_ACCOUNT}`
}

export const discordUrl = () => {
  return `${process.env.NEXT_PUBLIC_DISCORD_URL}`
}

export const snsLinks = {
  explorerUrl,
  openseaUrl,
  twitterUrl,
  instagramUrl,
  discordUrl,
}
