import * as React from 'react';
import Grid from "@mui/material/Grid";
import AuthorCard from './authorCard';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';


const theme = createTheme();

export default function FavoriteAuthor(props) {

    return (
        <ThemeProvider theme={theme}>
            <main>
                <Container sx={{ p: 0 }} maxWidth="xl">
                    {props.bookInfos.book ? (
                        <Grid>
                            {props.bookInfos.books.map((info) => ( //bookInfoになっています。
                                <AuthorCard favoriteAuthors={info} />
                            ))}
                        </Grid>
                    ) : (
                        <h2>現在お気に入りに登録されている作者はいません</h2>
                    )}
                </Container>
            </main>
        </ThemeProvider>
    );
}