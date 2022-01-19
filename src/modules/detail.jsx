import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import BookInfoIcons from "./bookInfoIcons";
import "../index.css";
import { useLocation } from 'react-router-dom';
import FavoSeries from './favoSeriesButton.jsx';
import FavoAuthor from './favoAuthorButton.jsx'


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


  let {state} = useLocation();

  console.log(state)

  if(state === null){
		state = {bookInfo: ""}
	}//ログインしていないときにこのページにアクセスした場合にルートに戻るために必要

  const {bookInfo} = state

  if(state.bookInfo){
    return (
      <Paper
        variant="outlined"
        elevation={0}
        sx={{ p: 3, m: "auto", flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid item>
            <ButtonBase sx={{ width: 200, height: 200 }}>
              <Img alt="表紙" src={bookInfo.book.image_url} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <ThemeProvider theme={theme}>
                  <Typography booktitle variant="title" component="div">
                    {bookInfo.book.title}
                  </Typography>
                  <BookInfoIcons bookInfo={bookInfo}/>
                  <Typography class="description" variant="info" component="div" >
                    {bookInfo.book.description}
                  </Typography>
                </ThemeProvider>
              </Grid>
              <Grid item>
                <FavoSeries bookInfo={bookInfo}/><br />
                <FavoAuthor bookInfo={bookInfo}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }else{
    return (<h2></h2>);
  }
}