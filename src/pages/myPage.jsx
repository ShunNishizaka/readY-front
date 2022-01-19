import Tabs from '../modules/tabs'
import Header from '../modules/header'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom";
import React,{useEffect} from 'react';
import { authentication_token } from '../request'

function MyPage() {
	let navigate = useNavigate();
	const token = localStorage.getItem("token");
	const onClickEvent = () =>{
		localStorage.removeItem("token")
		localStorage.removeItem("refresh_token")
		navigate("/");
	}
	
	useEffect(()=>{
		if(localStorage.getItem("refresh_token") === null || localStorage.getItem("refresh_token") === 'undefined'){
			localStorage.removeItem("refresh_token");
			localStorage.removeItem("token");
			navigate("/");
		}
		authentication_token(localStorage.getItem("refresh_token"));
	});

	return (
		<div className="MyPage">
			<Header searchBox placeholder="書籍検索">
				{/* <Button color="inherit" size="large" sx={{ mr:2 }}>部屋を探す</Button> */}
				<Button color="inherit" size="large" sx={{ mr:2 }}>部屋を探す</Button>
				<Button color="inherit" size="large" to="/settingpage" component={Link}>設定</Button>
				<Button color="inherit" size="large" sx={{ ml:2 }} onClick={onClickEvent}>ログアウト</Button>
			</Header>
			<Tabs />
		</div>
	)
}

export default MyPage