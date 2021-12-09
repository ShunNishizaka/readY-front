import * as React from 'react';
import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid';
import ExperimentBookCard from './experimentBookCard';

export default function Result() {
    
    const results =[1,2,3,4,5]

    return(
        <Paper variant="outlined" elevation={0} sx={{ p: 4}}>
           <Grid item sx={{m:1}}  spacing={2}  container >
                  {results.map((card) => (
                    <ExperimentBookCard/>
                  ))}
                </Grid>
        </Paper>
    );
}