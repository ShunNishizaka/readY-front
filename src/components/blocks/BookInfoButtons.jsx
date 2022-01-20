import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import CardActions from '@mui/material/CardActions'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import IconButton from '@mui/material/IconButton'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import { React, useState } from 'react'

export default function BookInfoButtons () {
  const [isRead, setIsRead] = useState(false)
  const [isPurchased, setIsPurchased] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)

  const onReadButtonClicked = () => {
    setIsRead(!isRead)
  }

  const onPurchaseButtonClicked = () => {
    setIsPurchased(!isPurchased)
  }

  const onFavoriteButtonClicked = () => {
    setIsFavorited(!isFavorited)
  }

  return (
    <CardActions>
      <IconButton onClick={onReadButtonClicked}>
        { isRead ? <BookmarkAddedIcon/> : <BookmarkBorderIcon/> }
      </IconButton>
      <IconButton onClick={onPurchaseButtonClicked}>
        { isPurchased ? <MonetizationOnIcon/> : <AttachMoneyIcon/> }
      </IconButton>
      <IconButton onClick={onFavoriteButtonClicked}>
        { isFavorited ? <FavoriteIcon/> : <FavoriteBorderIcon/> }
      </IconButton>
    </CardActions>
  )
}
