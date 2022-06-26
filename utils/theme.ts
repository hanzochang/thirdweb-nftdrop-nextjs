import { extendTheme } from '@chakra-ui/react'
import { colors } from '../utils/colors'

export const theme = extendTheme({
  textStyles: {
    logo: {
      fontSize: { base: '18px', md: '24px' },
      fontWeight: 'bold',
      lineHeight: '100%',
      letterSpacing: '',
    },
  },
  colors,
})
