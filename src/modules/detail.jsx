import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from 'react';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import IconButton from "@mui/material/IconButton";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import Button from "@mui/material/Button";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "../index.css";



const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const theme = createTheme({
  typography: {
    title: {
      fontSize: 35,
    },
    info: {
      fontSize: 30,
    },
  },
});



export default function Details() {

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

  return (
    <Paper
      variant="outlined"
      elevation={0}
      sx={{ p: 3, m: "auto", flexGrow: 1 }}
    >
      <Grid container spacing={4}>
        <Grid item>
          <ButtonBase sx={{ width: 200, height: 200 }}>
            <Img alt="表紙" src="C:/Users/180581/Documents/test.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={1}>
            <Grid item xs>
              <ThemeProvider theme={theme}>
                <Typography booktitle variant="title" component="div">
                  書籍タイトル
                </Typography>
                  <IconButton aria-label="bookRead" onClick={onClickRead}>
                    {readIcon ? <BookmarkAddedIcon /> : <BookmarkBorderIcon />}
                  </IconButton>
                  <IconButton aria-label="bookPurchased" onClick={onClickPurchased}>
                    {purchasedIcon ? <MonetizationOnIcon /> : <AttachMoneyIcon />}
                  </IconButton>
                  <IconButton aria-label="bookPurchased" onClick={onClickFavorite}>
                    {favoriteIcon ? <FavoriteBorderIcon/> : <FavoriteIcon />}
                  </IconButton>
                <Typography variant="info" component="div">
                  書籍情報
                </Typography>
              </ThemeProvider>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                <Button variant="contained">
                  この書籍の輪読グループを見る
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
