import { Link } from "react-router-dom";
import Header from '../modules/header.jsx'
import Result from '../modules/result.jsx'
import Button from '@mui/material/Button';
import Footer from "../modules/footer.jsx";



function SearchResult() {
	return (
		<div className="SearchResult">
			<Header searchBox placeholder="書籍検索">
			<Button color="inherit" size="large" to="/mypage" component={Link}>マイページへ</Button>
			</Header>
            <Result />
			<Footer />
		</div>
	)
}

export default SearchResult