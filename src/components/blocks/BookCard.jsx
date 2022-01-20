import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'

import { React } from 'react'

import BookInfoButtons from './BookInfoButtons'

export default function BookCard (props) {
  const { bookInfo } = props

  return (
    <Card sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <CardMedia
        component="img"
        image={bookInfo.book.image_url}
      />
      <BookInfoButtons />
      <CardContent>
        <Typography className="cardTitle" gutterBottom variant="h6" component={'div'}>
          {bookInfo.book.title}
        </Typography>
        <Typography component={'div'} variant="div">
          著者: {bookInfo.book.author}
        </Typography>
        <Typography component={'div'} variant="div">
          シリーズ: {bookInfo.book.series_name}
        </Typography>
      </CardContent>
    </Card>
  )
}

BookCard.propTypes = {
  bookInfo: PropTypes.object
}
