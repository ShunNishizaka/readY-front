import * as React from 'react';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import IconButton from '@mui/material/IconButton';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useState } from 'react';
import Card from '@mui/material/Card';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import { set_book_info, delete_book_info, patch_book_info } from '../request'


export default function BookCard(props) {
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



  return (
    <Grid item xs={12} sm={6} md={2.4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="img"
          image={props.bookInfo.book.image_url}
          alt="random"
        />
        <CardActions>
          <IconButton aria-label="bookRead" onClick={onClickRead}>
            {readIcon ? <BookmarkAddedIcon /> : <BookmarkBorderIcon />}
          </IconButton>
          <IconButton aria-label="bookPurchased" onClick={onClickPurchased}>
            {purchasedIcon ? <MonetizationOnIcon /> : <AttachMoneyIcon />}
          </IconButton>
          <IconButton aria-label="bookFavo" onClick={onClickFavorite}>
            {favoriteIcon ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </CardActions>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography class="cardTitle" gutterBottom variant="h6" component={"div"} onClick={() => { navigate('/bookdetail', { state: { bookInfo: props.bookInfo } }) }}>
            {props.bookInfo.book.title}
          </Typography>
          <Typography component={"div"} variant="div">
            著者: {props.bookInfo.book.author}
          </Typography>
          <Typography component={"div"} variant="div">
            シリーズ: {props.bookInfo.book.series_name}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button variant="contained">この書籍のグループを検索</Button>
        </CardActions> */}
      </Card>
    </Grid>
  )
}