import * as React from 'react';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Card from '@mui/material/Card';
import BookInfoIcons from './bookInfoIcons';


export default function ExperimentBookInfo() {

    return(
      <Grid item xs={12} sm={6} md={2.8} >
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}        >
         <CardMedia  component="img" image="https://source.unsplash.com/random" alt="random"  height="200"/>
        <BookInfoIcons></BookInfoIcons>
        <CardContent sx={{ flexGrow: 0 }}>
          <Typography gutterBottom variant="h6" component="h2">
            書籍名《オレオレ詐欺完全攻略》
          </Typography>
          <Typography>
            作者：俺
          </Typography>
          <Typography>
            シリーズ：オレオレ詐欺
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained">この書籍のグループを検索</Button>
        </CardActions>
      </Card>
     </Grid>
    );
}