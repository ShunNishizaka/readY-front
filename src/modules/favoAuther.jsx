import * as React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import IconButton from '@mui/material/IconButton';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { set_book_info, delete_book_info, patch_book_info } from '../request'


export default function BookInfoIcons(props) {
  const [readIcon, setReadIcon] = useState(props.bookInfo.is_read);
  const [purchasedIcon, setPurchasedIcon] = useState(props.bookInfo.is_purchased);
  const [favoriteIcon, setFavoriteIcon] = useState(props.bookInfo.is_favorite);


  const onClickRead = () => {
    if (readIcon && !purchasedIcon && !favoriteIcon) {
      //delete
      delete_book_info(localStorage.getItem("token"), props.bookInfo.book.item_number)
    }
    setReadIcon(!readIcon)
  }

  return (
    <Button variant="contained">
      この書籍の作者をお気に入り登録する
    </Button>
  )
}