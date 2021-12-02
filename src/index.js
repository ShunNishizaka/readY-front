import LandingPage from './pages/landingPage.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './pages/loginPage'
import { BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';
import MyPage from './pages/myPage.jsx';
import BookDetail from './pages/bookDetail.jsx';

ReactDOM.render(
  <Router>
		<Routes>
			<Route path="/" element={<LandingPage/>}/>
			<Route path="/login" element={<LoginPage/>} />
			<Route path="/mypage" element={<MyPage/>}/>
      <Route path="/bookdetail" element={<BookDetail />} />
		</Routes>
	</Router>,
	document.getElementById('root')
);