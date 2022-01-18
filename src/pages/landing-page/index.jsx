import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import { Link } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { useState, React } from 'react'

import FlexBox from '../../components/atoms/FlexBox'
import Header from '../../components/blocks/Header'
import * as Requests from '../../utils/request'

export default function LandingPage () {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword({
      showPassword: !showPassword.showPassword
    })
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const a = await Requests.createUser(
      data.get('email'),
      data.get('password'),
      data.get('name')
    )
    console.log(a)
  }

  return (
    <FlexBox>
      <Header>
        <Button color="inherit" size="large" to="/login" component={Link}>ログイン</Button>
      </Header>
      <Grid container sx={{ Height: '100vh', flex: 1 }}>
        <Grid item lg={8} sm={12} sx={{ display: 'flex', alignItems: 'center' }}>
          <Paper square elevation={0} sx={{
            p: 2,
            backgroundColor: '#ffffffCF',
            width: '100%'
          }}>
            <h1>Are you ReadY?</h1>
            <h3>Read-Yはあなたの読書生活をより快適にするための<br />書籍管理サービスです。</h3>
          </Paper>
        </Grid>
        <Grid item lg={4} sm={12} component={Paper} square>
          <Box sx={{
            py: 8,
            px: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 'auto'
          }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              アカウント作成
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Eメールアドレス"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="パスワード"
                name="password"
                autoComplete="current-password"
                type={showPassword.showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="表示名"
                name="name"
                autoComplete="name"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                作成
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </FlexBox>
  )
}
