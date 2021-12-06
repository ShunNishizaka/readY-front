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


export default function BookCard(){

	const [favoriteIcon, setFavoriteIcon] = useState(false);

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
					image="https://source.unsplash.com/random"
					alt="random"
					height="200"
				/>
				<CardActions>
					<IconButton aria-label="bookPurchased" onClick={onClickFavorite}>
						{favoriteIcon ? <FavoriteBorderIcon /> : <FavoriteIcon />}
					</IconButton>
				</CardActions>
				<CardContent sx={{ flexGrow: 1 }}>
					<Typography gutterBottom variant="h6" component="h2">
						シリーズ名《犯罪のやり方全集》
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	)
}