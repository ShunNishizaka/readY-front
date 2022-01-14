import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LandingPage from './pages/landing-page'

ReactDOM.render(
	<Router>
		<CssBaseline/>
		<Routes>
      <Route path="/" element={<LandingPage/>}/>
		</Routes>
	</Router>,
	document.getElementById('root')
)
