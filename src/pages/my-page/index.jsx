import SearchIcon from '@mui/icons-material/Search'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { React, useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import Search from '../../components/atoms/Search'
import SearchIconWrapper from '../../components/atoms/SearchIconWrapper'
import StyledInputBase from '../../components/atoms/StyledInputBase'
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
      <AppBar position="static" id="header">
        <Container maxWidth="99%">
          <Toolbar disableGutters>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, flexGrow: 0 }}
            >
              Read-Y
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="書籍を検索..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </Container>
      </AppBar>
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
