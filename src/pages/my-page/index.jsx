import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { React, useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import Header from '../../components/blocks/Header'
import TabPanel from '../../components/atoms/TabPanel'

function genProps (index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
  }
}

export default function MyPage () {
  const [value, setValue] = useState(0)

  const tabChanged = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Header searchBox placeholder="書籍を検索..."/>
      <Box sx={{ height: '100%', bgcolor: 'background.paper', width: 1, flex: 1 }}>
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
            Hello No1
          </TabPanel>
          <TabPanel value={value} index={1}>
            Hello No2
          </TabPanel>
          <TabPanel value={value} index={2}>
            Hello No3
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Box>
  )
}
