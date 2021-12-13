import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BookCard from './bookCard'


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

const theme = createTheme();


export default function Album(props) {



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {console.log(props.bookInfos)}
      <main>
        {/* Hero unit */}
        <Container sx={{ p: 0 }} maxWidth="xl">
          {/* End hero unit */}
          {props.bookInfos.books ? ( //プロップスがundefinedならば下のh2を表示
            <Grid container spacing={3}>
            {props.bookInfos.books.map((info) => (
              <BookCard bookInfo={info}/>
            ))}
          </Grid>
          ):(
            <h2>現在お気に入りに登録されている書籍はありません</h2>
          )}

        </Container>
      </main>
    </ThemeProvider>
  );
}
