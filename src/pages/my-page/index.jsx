import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import SwipeableViews from 'react-swipeable-views'

import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import FlexBox from '../../components/atoms/FlexBox'
import Header from '../../components/blocks/Header'
import * as Requests from '../../utils/request'
import TabPanel from '../../components/atoms/TabPanel'

function genProps (index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
  }
}

export default function MyPage () {
  const navigate = useNavigate()
  const [value, setValue] = useState(0)

  const [registeredBookPending, setRegisteredBookPending] = useState(true)
  const [registeredBooks, setRegisteredBooks] = useState([])

  const getUserRegisteredBook = async () => {
    setRegisteredBooks(await Requests.getRegisteredBooks())
    setRegisteredBookPending(false)
  }

  const tabChanged = (event, newValue) => {
    setValue(newValue)
  }

  const keyPressed = async (event) => {
    if (event.key !== 'Enter') return
    event.preventDefault()
    const searchKeyword = (event.target.value || '').replace(/^\s+|\s+$/g, '')
    if (searchKeyword === '') return
    navigate('/searchresult', {
      state: {
        searchKeyword: searchKeyword
      }
    })
  }

  useEffect(() => {
    getUserRegisteredBook()
  }, [registeredBookPending])

  return (
    <FlexBox>
      <Header searchBox placeholder="書籍を検索..." keyPress={keyPressed}/>
      <Box sx={{ height: 'auto', bgcolor: 'background.paper', width: 1, flex: 1 }}>
        <AppBar position="static" elevation={0}>
          <Tabs
            value={value}
            onChange={tabChanged}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
          >
            <Tab label="お気に入り書籍" {...genProps(0)} />
            <Tab label="お気に入り作者" {...genProps(1)} />
            <Tab label="お気に入りシリーズ" {...genProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={value}
        >
          <TabPanel value={value} index={0}>
            { registeredBookPending ? 'Loading...' : registeredBooks }
          </TabPanel>
          <TabPanel value={value} index={1}>
            Hello No2
          </TabPanel>
          <TabPanel value={value} index={2}>
            Hello No3
          </TabPanel>
        </SwipeableViews>
      </Box>
    </FlexBox>
  )
}
