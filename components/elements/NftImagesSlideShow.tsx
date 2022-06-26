import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import { NftContractContext } from '../../contexts/NftContractProvider'

import { NftImage } from './NftImage'

const Component: React.FC = () => {
  const [allTokens, setAllTokens] = useState<Array<any>>([])
  const [rand, setRand] = useState<number>(0)

  const store = useContext(NftContractContext)

  const token: any | undefined =
    allTokens && allTokens[Math.floor(rand * allTokens.length)]

  useEffect(() => {
    const interval = setInterval(() => {
      setRand(Math.random())
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setAllTokens(store.allTokens)
  }, [store])

  return token ? (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={token.metadata.id._hex}
        initial={{ x: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <NftImage imageUri={token.metadata.image} />
      </motion.div>
    </AnimatePresence>
  ) : (
    <></>
  )
}

export { Component as NftImagesSlideShow }
