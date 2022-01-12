import { Link } from "react-router-dom";
import Header from '../modules/header.jsx'
import Button from '@mui/material/Button';
import Footer from "../modules/footer.jsx";
import Paper from '@mui/material/Paper';
import BookInfo from '../modules/bookInfo.jsx'
import { useLocation } from 'react-router-dom';
import { get_search_books } from '../request'
import { useAsyncRun, useAsyncTask} from "react-hooks-async"
import React,{useEffect} from 'react';
import { useNavigate} from "react-router-dom";

const fetchBookSearchResult = async ({signal}, token, keyword) => {
	return await get_search_books(token, keyword);
}


function SearchResult() {
	let navigate = useNavigate();
	useEffect(()=>{
		if(localStorage.getItem("refresh_token") === null){
			navigate("/")
		}
	});

	let {state} = useLocation();

	if(state === null){
		state = {searchKeyword: ""}
	}//ログインしていないときにこのページにアクセスした場合にルートに戻るために必要

	const {searchKeyword} = state;
	const task = useAsyncTask(fetchBookSearchResult);
	const { pending, error, result, abort } = task;
	useAsyncRun(task, localStorage.getItem("token"), searchKeyword);

	

	return (
		<div className="SearchResult">
			<Header searchBox placeholder="書籍検索">
				<Button color="inherit" size="large" to="/mypage" component={Link}>マイページへ</Button>
			</Header>
			<Paper
				variant="outlined"
				elevation={0}
				sx={{ p: 3, m: "auto", flexGrow: 1 }}>
				{pending ? "Loading..." : <BookInfo bookInfos={result}/>}
			</Paper>
			<Footer />
		</div>
	)
}

export default SearchResult