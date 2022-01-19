import PropTypes from 'prop-types'
import React from 'react'
import Search from '../atoms/Search'
import SearchIcon from '@mui/icons-material/Search'
import SearchIconWrapper from '../atoms/SearchIconWrapper'
import StyledInputBase from '../atoms/StyledInputBase'

export default function SearchBox (props) {
  const { placeholder, keyPress } = props

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={placeholder || 'Search...'}
        inputProps={{ 'aria-label': 'search' }}
        onKeyPress={keyPress}
      />
    </Search>
  )
}

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  keyPress: PropTypes.func
}
