import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React from 'react'
import Header from '../../components/blocks/Header'

export default function LoginPage () {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Header />
      <Grid container sx={{ height: '100vh', flex: 1 }}>
        <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
          <Box sx={{
            py: 8,
            px: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              ログイン
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Eメールアドレス"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="パスワード"
                name="password"
                autoComplete="password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                ログイン
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
