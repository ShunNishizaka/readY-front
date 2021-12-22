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
import { useNavigate } from 'react-router-dom';
import { set_book_info, delete_book_info, patch_book_info } from '../request'


export default function BookInfoIcons(props) {
  const [readIcon, setReadIcon] = useState(props.bookInfo.is_read);
  const [purchasedIcon, setPurchasedIcon] = useState(props.bookInfo.is_purchased);
  const [favoriteIcon, setFavoriteIcon] = useState(props.bookInfo.is_favorite);

  const navigate = useNavigate();

  const onClickRead = () => {
    if (readIcon && !purchasedIcon && !favoriteIcon) {
      //delete
      delete_book_info(localStorage.getItem("token"), props.bookInfo.book.item_number)
    } else if (favoriteIcon || purchasedIcon) {
      //patch
      patch_book_info(localStorage.getItem("token"), props.bookInfo.book.item_number, purchasedIcon, !readIcon, favoriteIcon)
    } else {
      //post
      set_book_info(localStorage.getItem("token"), props.bookInfo.book.item_number, purchasedIcon, !readIcon, favoriteIcon)
    }
    setReadIcon(!readIcon)
  }

  const onClickPurchased = () => {
    if (!readIcon && purchasedIcon && !favoriteIcon) {
      //delete
      delete_book_info(localStorage.getItem("token"), props.bookInfo.book.item_number)
    } else if (readIcon || favoriteIcon) {
      //patch
      patch_book_info(localStorage.getItem("token"), props.bookInfo.book.item_number, !purchasedIcon, readIcon, favoriteIcon)
    } else {
      //post
      set_book_info(localStorage.getItem("token"), props.bookInfo.book.item_number, !purchasedIcon, readIcon, favoriteIcon)
    }
    setPurchasedIcon(!purchasedIcon)
  }

  const onClickFavorite = () => {
    if (!readIcon && !purchasedIcon && favoriteIcon) {
      //delete
      delete_book_info(localStorage.getItem("token"), props.bookInfo.book.item_number)
    } else if (readIcon || purchasedIcon) {
      //patch
      patch_book_info(localStorage.getItem("token"), props.bookInfo.book.item_number, purchasedIcon, readIcon, !favoriteIcon)
    } else {
      //post
      set_book_info(localStorage.getItem("token"), props.bookInfo.book.item_number, purchasedIcon, readIcon, !favoriteIcon)
    }
    setFavoriteIcon(!favoriteIcon)
  }

    return(
      <Typography>
        <IconButton aria-label="bookRead" onClick={onClickRead}>
            {readIcon ? <BookmarkAddedIcon /> : <BookmarkBorderIcon />}
        </IconButton>
        <IconButton aria-label="bookPurchased" onClick={onClickPurchased}>
            {purchasedIcon ? <MonetizationOnIcon /> : <AttachMoneyIcon />}
        </IconButton>
        <IconButton aria-label="bookFavo" onClick={onClickFavorite}>
            {favoriteIcon ? <FavoriteIcon/> : <FavoriteBorderIcon />}
        </IconButton>
      </Typography>
    )
}