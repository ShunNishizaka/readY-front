import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import PropTypes from 'prop-types'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React from 'react'
import SearchBox from './SearchBox'

export default function Header (props) {
  const { searchBox, ...others } = props
  return (
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
          {searchBox && <SearchBox {...others}/>}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

Header.propTypes = {
  searchBox: PropTypes.bool
}
