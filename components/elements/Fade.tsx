import { AnimatePresence, motion } from 'framer-motion'
import React, { ReactElement } from 'react'

const Component: React.FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export { Component as Fade }
