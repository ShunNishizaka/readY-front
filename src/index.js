import App from './index.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login/login'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import MyPage from './myPage.jsx';
import BookDetail from './bookDetail.jsx';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/bookdetail" element={<BookDetail />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);