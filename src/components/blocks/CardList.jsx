import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'

import { React } from 'react'

import BookCard from './BookCard'

export default function CardList (props) {
  const { bookInfos, text } = props
  return (
    bookInfos.length
      ? (
      <Grid container spacing={3}>
        {bookInfos.map((info, index) => {
          return (
            <Grid item xs={12} sm={6} md={2.4} key={index}>
              <BookCard bookInfo={info}/>
            </Grid>
          )
        })}
      </Grid>
        )
      : (
      <h2>{text}</h2>
        )
  )
}

CardList.propTypes = {
  bookInfos: PropTypes.array,
  text: PropTypes.string
}
