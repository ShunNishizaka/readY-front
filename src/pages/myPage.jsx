import Tabs from '../modules/tabs'
import Header from '../modules/header'
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom";

function MyPage() {
	let navigate = useNavigate();
	const token = localStorage.getItem("token");
	const onClickEvent = () =>{
		localStorage.setItem("token","")
		localStorage.setItem("refresh_token","")
		navigate("/");
	}
	

	return (
		<div className="MyPage">
			<Header searchBox placeholder="書籍検索">
				<Button color="inherit" size="large" sx={{ mr:2 }}>部屋を探す</Button>
				<Button color="inherit" size="large">設定</Button>
				<Button color="inherit" size="large" sx={{ ml:2 }} onClick={onClickEvent}>ログアウト</Button>
			</Header>
			<Tabs />
		</div>
	)
}

export default MyPage