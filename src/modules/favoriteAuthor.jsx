import * as React from 'react';
import Grid from "@mui/material/Grid";
import AutherCard from './authorCard';


const authorcards = [1, 2];

export default function FavoriteAuthor() {

    return(
         <Grid>
             {authorcards.map((card) => (
              <AutherCard/>
            ))}
         </Grid>
    )
}