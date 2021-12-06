import * as React from 'react';
import Paper from "@mui/material/Paper";
import BookInfo from './bookInfo';

export default function Result() {
    
    return(
        <Paper
        variant="outlined"
        elevation={0}
        sx={{ p: 3, m: "auto", flexGrow: 1 }}>
            <BookInfo></BookInfo>
        </Paper>
    );
}