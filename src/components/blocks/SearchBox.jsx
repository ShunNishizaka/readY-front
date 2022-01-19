import PropTypes from 'prop-types'
import React from 'react'
import Search from '../atoms/Search'
import SearchIcon from '@mui/icons-material/Search'
import SearchIconWrapper from '../atoms/SearchIconWrapper'
import StyledInputBase from '../atoms/StyledInputBase'

import { useNavigate } from 'react-router-dom'

export default function SearchBox (props) {
  const navigate = useNavigate()

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

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={props.placeholder || 'Search...'}
        inputProps={{ 'aria-label': 'search' }}
        onKeyPress={keyPressed}
      />
    </Search>
  )
}

SearchBox.propTypes = {
  placeholder: PropTypes.string
}
