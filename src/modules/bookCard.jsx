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



export default function BookCard(props) {
  const [readIcon, setReadIcon] = useState(false);
  const [purchasedIcon,setPurchasedIcon] = useState(false);
  const [favoriteIcon,setFavoriteIcon] = useState(false);

  const navigate = useNavigate();
  
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



  return (
    <Grid item xs={12} sm={6} md={2.4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="img"
          image={props.bookInfo.image_url}
          alt="random"
        />
        <CardActions>
          <IconButton aria-label="bookRead" onClick={onClickRead}>
            {readIcon ? <BookmarkAddedIcon /> : <BookmarkBorderIcon />}
          </IconButton>
          <IconButton aria-label="bookPurchased" onClick={onClickPurchased}>
            {purchasedIcon ? <MonetizationOnIcon /> : <AttachMoneyIcon />}
          </IconButton>
          <IconButton aria-label="bookPurchased" onClick={onClickFavorite}>
            {favoriteIcon ? <FavoriteBorderIcon/> : <FavoriteIcon />}
          </IconButton>
        </CardActions>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="h2" onClick={() => {navigate('/bookdetail',{state: {bookInfo: props.bookInfo}})}}>
            {props.bookInfo.title}
          </Typography>
          <Typography>
          著者: {props.bookInfo.author}
          </Typography>
          <Typography>
          シリーズ: {props.bookInfo.series_name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained">この書籍のグループを検索</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}