import Box from '@mui/material/Box'

import { styled } from '@mui/material/styles'

const FlexBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
}))

export default FlexBox
