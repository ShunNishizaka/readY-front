import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { create_user,Auth } from '../request'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const theme = createTheme();




export default function SignInSide() {

	const navigate = useNavigate();
	const [emailMessage, setEmailMessage] = React.useState('');
	const [passwordMessage, setPasswordMessage] = React.useState('');
	const [nameMessage, setNameMessage] = React.useState('');
	const [emailCheck, setEmailCheck] = React.useState(true);
	const [passwordCheck, setPasswordCheck] = React.useState(true);
	const [nameCheck, setNameCheck] = React.useState(true);
	const [loading, setloading] = React.useState(false);
	const [showPassword, setShowPassword] = React.useState(false);

	async function handleSubmit(event) {
		event.preventDefault();
		setloading(true)
		const data = new FormData(event.currentTarget);
		console.log('押しました!!')

		if(!emailCheck&& !passwordCheck&& !nameCheck){

			// eslint-disable-next-line no-console
			console.log('行きました!!!')

			await create_user(
				data.get('email'),
				data.get('password'),
				data.get('name')
			);

			await Auth(
				data.get('email'),
				data.get('password'),
			);
			navigate("/mypage");
		}
	};

	const handleClickShowPassword = () => {
		setShowPassword({
		  showPassword: !showPassword.showPassword,
		});
	};
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

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
			case "name":
				validated = nameValidation(value)
				setNameMessage(validated);
				setNameCheck(validated);
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

	function nameValidation(value){
		if(!value) return 'ユーザ名を入力してください';
		return '';
	}

	function passwordValidation(value){
		if(!value) return 'パスワードを入力してください。';
		const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!-/:-@[-`{-~])[a-zA-Z0-9.!-/:-@[-`{-~]{8,100}$/;
		if (value.length <8) return '８文字以上必要です。';
		if (!regex.test(value)) return '英大文字・英小文字・数字・記号それぞれ一文字含む必要があります';
		return '';
	}

	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{ height: '120vh' }} spacing={0}>
				<CssBaseline />
				{/*以下の「className='login-box'」はいじらないこと*/}
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
							アカウント作成
						</Typography>
						<Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1, width: 1  }}>
							{/*<Typography variant="body1">サインアップエラーメッセージ予定地</Typography>*/}
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								autoFocus
								error={emailMessage}
								helperText={emailMessage}
								onChange={handleChange}
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								id="name"
								label="Name"
								name="name"
								autoComplete="name"
								autoFocus
								error={nameMessage}
								helperText={nameMessage}
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
								disabled ={emailCheck || passwordCheck || nameCheck || loading}
							>
								作成
							</Button>
							<Grid container>
							</Grid>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}