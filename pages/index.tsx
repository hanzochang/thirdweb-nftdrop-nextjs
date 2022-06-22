import type { NextPage } from 'next'
import { NFTList } from '../components/NFTList'
import { MintButton } from '../components/MintButton'
import { Wallet } from '../components/Wallet'
import Head from 'next/head'
import { Minting } from '../components/templates/Minting'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Minting />
      </div>
    </>
  )
}

export default Home
