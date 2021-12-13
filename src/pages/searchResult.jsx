import { Link } from "react-router-dom";
import Header from '../modules/header.jsx'
import Button from '@mui/material/Button';
import Footer from "../modules/footer.jsx";
import Paper from '@mui/material/Paper';
import BookInfo from '../modules/bookInfo.jsx'
import { useLocation } from 'react-router-dom';




function SearchResult() {
	const {state} = useLocation();
	const {searchResult} = state
	return (
		<div className="SearchResult">
			<Header searchBox placeholder="書籍検索">
				<Button color="inherit" size="large" to="/mypage" component={Link}>マイページへ</Button>
			</Header>
			<Paper
				variant="outlined"
				elevation={0}
				sx={{ p: 3, m: "auto", flexGrow: 1 }}>
				<BookInfo bookInfos={searchResult}></BookInfo>
			</Paper>
			<Footer />
		</div>
	)
}

export default SearchResult