import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Header from '../modules/header.jsx'
import SignUp from '../modules/signUp'
import LP from '../modules/lp'
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { authentication_token } from '../request'

function LandingPage() {
	let navigate = useNavigate();

	useEffect(() => {
		if(localStorage.getItem("refresh_token") !== null){
			authentication_token(localStorage.getItem("refresh_token"));
			navigate("/mypage");
		}
	});

	return (
		<div className="App">
			<Header>
				<Button color="inherit" size="large" to="/login" component={Link}>ログイン</Button>
			</Header>
			<Grid container square>
				<Grid item lg={8} sm={12}>
					<LP/>
				</Grid>
				<Grid item lg={4} sm={12}>
					<SignUp/>
				</Grid>
			</Grid>
		</div>
	)
}

export default LandingPage