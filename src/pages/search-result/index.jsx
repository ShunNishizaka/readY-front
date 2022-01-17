import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import React from 'react'

import FlexBox from '../../components/atoms/FlexBox'
import Header from '../../components/blocks/Header'

export default function SearchResult () {
  return (
    <FlexBox>
      <Header searchBox placeholder="書籍を検索..."/>
      <Box sx={{ flex: 1, height: 'auto' }} component={Paper}>
      </Box>
    </FlexBox>
  )
}
