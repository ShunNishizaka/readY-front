import Tabs from '../modules/tabs'
import Header from '../modules/header'
import Button from '@mui/material/Button'

function MyPage() {
	const token = localStorage.getItem("token");

	

	return (
		<div className="MyPage">
			<Header searchBox placeholder="書籍検索">
				<Button color="inherit" size="large" sx={{ mr:2 }}>部屋を探す</Button>
				<Button color="inherit" size="large">設定</Button>
				<Button color="inherit" size="large" sx={{ ml:2 }}>ログアウト</Button>
			</Header>
			<Tabs />
		</div>
	)
}

export default MyPage