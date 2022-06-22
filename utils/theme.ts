import { extendTheme } from '@chakra-ui/react'
import { colors } from '../utils/colors'

export const theme = extendTheme({
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ['32px', '32px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
  },
  colors,
})
