import { Link } from "react-router-dom";
import Header from '../modules/header.jsx'
import Detail from '../modules/detail'
import Button from '@mui/material/Button';
import Footer from "../modules/footer.jsx";

function BookDetail() {
	return (
		<div className="BookDetail">
			<Header searchBox placeholder="書籍検索">
			<Button color="inherit" size="large" to="/mypage" component={Link}>マイページへ</Button>
			</Header>
			<Detail />
			<Footer />
		</div>
	)
}

export default BookDetail