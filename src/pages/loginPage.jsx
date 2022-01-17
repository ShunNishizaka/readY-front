import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Auth,authentication_token } from '../request'
import { useNavigate } from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import React, { useState, useEffect } from 'react';

const theme = createTheme();

export default function Login() {
	const [emailMessage, setEmailMessage] = React.useState('');
	const [passwordMessage, setPasswordMessage] = React.useState('');
	const [emailCheck, setEmailCheck] = React.useState(true);
	const [passwordCheck, setPasswordCheck] = React.useState(true);
	const [loading, setloading] = React.useState(false);
	const [showPassword, setShowPassword] = React.useState(false);

	let navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		setloading(true)
		const data = new FormData(event.currentTarget);
		await Auth(data.get('email'),data.get('password'));
		
		navigate("/mypage");
	};
	const handleClickShowPassword = () => {
		setShowPassword({
		  showPassword: !showPassword.showPassword,
		});
	};
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};


	useEffect(() => {
		if(localStorage.getItem("refresh_token") !== null && localStorage.getItem("refresh_token") !== 'undefined'){
			authentication_token(localStorage.getItem("refresh_token"));
			navigate("/mypage");
		}
	});

	function handleChange(event) {
		const name = event.target.name;
        const value = event.target.value;
		let validated;
		switch(name) {
			case "email":
				validated = emailValidation(value)
				setEmailMessage(validated);
				setEmailCheck(validated);
				return
			case "password":
				validated = passwordValidation(value)
				setPasswordMessage(validated);
				setPasswordCheck(validated);
				return
			default:
				return
		}
	}

	function emailValidation(value) {
		if(!value) return 'メールアドレスを入力してください。' ;
		const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
		if (!regex.test(value)) return '不正なメールアドレスです。';
		return '';
	};

	function passwordValidation(value){
		if(!value) return 'パスワードを入力してください。';
		const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!-/:-@[-`{-~])[a-zA-Z0-9.!-/:-@[-`{-~]{8,100}$/;
		if (value.length <8 || !regex.test(value)) return '不正なパスワードです。';
		return '';
	}

	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{ height: '100vh' }}>
				<CssBaseline />
				<Grid item className='login-box' xs={12} sm={12} md={12} component={Paper} elevation={6} square>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							ログイン
						</Typography>
						<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								error={emailMessage}
								helperText={emailMessage}
								autoFocus
								onChange={handleChange}
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type={showPassword.showPassword ? 'text' : 'password'}
								id="password"
								autoComplete="current-password"
								error={passwordMessage}
								helperText={passwordMessage}
								onChange={handleChange}
								InputProps={{
									endAdornment:(
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
									),
								}}
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
								disabled ={emailCheck || passwordCheck}
							>
								ログイン
							</Button>
							<Grid container>
								{/* <Grid item xs>
								<Link href="#" variant="body2">
									パスワードをお忘れですか？
								</Link>
							</Grid> */}
							</Grid>
						</Box>
					</Box>
				</Grid>

			</Grid>
		</ThemeProvider>
	);
}