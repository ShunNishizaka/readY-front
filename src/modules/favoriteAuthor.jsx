import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import AuthorCard from './authorCard';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { get_favo_Author } from '../request';


const theme = createTheme();

export default function FavoriteAuthor(props) {

  const [favoAuthorExist, setFavoAuthorExist] = useState(false);
  const [favoriteAuthors, setFavoriteAuthors] = useState([]);
  const [pending, setPending] = useState(true)

  const getFavoAuthorResult = async () => {
    const result = await get_favo_Author(localStorage.getItem("token"))
    setFavoriteAuthors(result)
    if (!result) {
      setFavoAuthorExist(false);
      console.log("お気に入り作者がいない")
    } else {
      setFavoAuthorExist(true);
      console.log("お気に入り作者がいる")
    }
    console.log(result)
    console.log("通ったよ")
    setPending(false)
  }

  useEffect(() => {
    getFavoAuthorResult()
  }, [])

  if (pending) {
    return (
      <ThemeProvider theme={theme}>
        <main>
          <Container sx={{ p: 0 }} maxWidth="xl">
            <Grid>
              Loading...
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    )
  } else if (favoAuthorExist) {
    return (
      <ThemeProvider theme={theme}>
        <main>
          <Container sx={{ p: 0 }} maxWidth="xl">
            <Grid>
              {console.log(favoriteAuthors)}
              {favoriteAuthors.map((info) => ( 
                <AuthorCard favoriteAuthors={info} />
              ))}
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    )
  } else {
    return (
      <ThemeProvider theme={theme}>
        <main>
          <Container sx={{ p: 0 }} maxWidth="xl">
            <h2>現在お気に入りに登録されている作者はいません</h2>
          </Container>
        </main>
      </ThemeProvider>
    )
  }
}