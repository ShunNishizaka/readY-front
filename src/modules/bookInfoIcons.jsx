import * as React from 'react';
import Typography from '@mui/material/Typography';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import IconButton from '@mui/material/IconButton';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';

export default function BookInfoIcons() {
    const [readIcon, setReadIcon] = useState(false);
    const [purchasedIcon,setPurchasedIcon] = useState(false);
    const [favoriteIcon,setFavoriteIcon] = useState(false);


    const onClickRead = () => {
      if (readIcon === false) {
        setReadIcon(true)
      } else {
        setReadIcon(false)
      }
    }
    const onClickPurchased = () => {
      if (purchasedIcon === false) {
        setPurchasedIcon(true)
      } else {
        setPurchasedIcon(false)
      }
    }
    const onClickFavorite = () => {
      if (favoriteIcon === false) {
        setFavoriteIcon(true)
      } else {
        setFavoriteIcon(false)
      }
    }

    return(
      <Typography>
        <IconButton aria-label="bookRead" onClick={onClickRead}>
            {readIcon ? <BookmarkAddedIcon /> : <BookmarkBorderIcon />}
        </IconButton>
        <IconButton aria-label="bookPurchased" onClick={onClickPurchased}>
            {purchasedIcon ? <MonetizationOnIcon /> : <AttachMoneyIcon />}
        </IconButton>
        <IconButton aria-label="bookPurchased" onClick={onClickFavorite}>
            {favoriteIcon ? <FavoriteBorderIcon/> : <FavoriteIcon />}
        </IconButton>
      </Typography>
    )
}