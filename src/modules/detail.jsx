import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import BookInfoIcons from "./bookInfoIcons";
import "../index.css";
import { useLocation } from 'react-router-dom';


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
  const {state} = useLocation();
  const {bookInfo} = state
  return (
    <Paper
      variant="outlined"
      elevation={0}
      sx={{ p: 3, m: "auto", flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item>
          <ButtonBase sx={{ width: 200, height: 200 }}>
            <Img alt="表紙" src={bookInfo.image_url} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={1}>
            <Grid item xs>
              <ThemeProvider theme={theme}>
                <Typography booktitle variant="title" component="div">
                  {bookInfo.title}
                </Typography>
                <BookInfoIcons />
                <Typography variant="info" component="div">
                  {bookInfo.description}
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
