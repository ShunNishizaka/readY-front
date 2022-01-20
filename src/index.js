import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landing-page'
import LoginPage from './pages/login-page'
import MyPage from './pages/my-page'
import SearchResult from './pages/search-result'

ReactDOM.render(
  <Router>
    <CssBaseline />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/searchresult" element={<SearchResult/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
)
