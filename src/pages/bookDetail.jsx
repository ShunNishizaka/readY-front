import { Link } from "react-router-dom";
import Header from '../modules/header.jsx'
import Detail from '../modules/detail'
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import { authentication_token } from '../request';
import { useNavigate } from "react-router-dom";


function BookDetail() {
	let navigate = useNavigate();

	useEffect(()=>{
		if(localStorage.getItem("refresh_token") === null){
			navigate("/");
		}
		authentication_token(localStorage.getItem("refresh_token"));
	});


	return (
		<div className="BookDetail">
			<Header searchBox placeholder="書籍検索">
			<Button color="inherit" size="large" to="/mypage" component={Link}>マイページへ</Button>
			</Header>
			<Detail />
		</div>
	)
}

export default BookDetail