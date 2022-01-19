import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Paper from '@mui/material/Paper'
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import CardList from '../../components/blocks/CardList'
import FlexBox from '../../components/atoms/FlexBox'
import Header from '../../components/blocks/Header'
import * as Request from '../../utils/request'

const range = (start, end) => {
  const list = []
  for (let i = start; i <= end; i++) {
    list.push(i)
  }
  return list
}

export default function SearchResult () {
  const navigate = useNavigate()
  const { state } = useLocation()

  const [searchResults, setSearchResults] = useState([])
  const [searchPending, setSearchPending] = useState(true)

  const keyPressed = async (event) => {
    if (event.key !== 'Enter') return
    event.preventDefault()
    const searchKeyword = (event.target.value || '').replace(/^\s+|\s+$/g, '')
    if (searchKeyword === '') return
    setSearchPending(true)
    navigate('/searchresult', {
      state: {
        searchKeyword: searchKeyword
      }
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      setSearchPending(true)
      const results = await Request.search(state.searchKeyword)
      setSearchResults(results)
      setSearchPending(false)
    }
    fetchData()
    document.title = `${state.searchKeyword}の検索結果`
  }, [state])

  return (
    <FlexBox>
      <Header searchBox placeholder="書籍を検索..." keyPress={keyPressed}/>
      <Box sx={{ flex: 1, height: 'auto', p: 3 }} component={Paper} square>
        {searchPending ? 'けんさくちう...' : <CardList bookInfos={searchResults.books} text="検索ワードに該当する書籍が見つかりませんでした。"/>}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', p: 3, flexDirection: 'column' }} component={Paper} square>
        <ButtonGroup>
          {range(1, searchResults.page_count).map((value, index) => {
            return (
              <Button
                key={index}
                variant={value === searchResults.page ? 'outlined' : 'contained'}>
                  {value}
              </Button>
            )
          })}
        </ButtonGroup>
      </Box>
    </FlexBox>
  )
}
