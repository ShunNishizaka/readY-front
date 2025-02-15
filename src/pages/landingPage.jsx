import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Header from '../modules/header.jsx'
import SignUp from '../signUp'

function LandingPage() {
	return (
		<div className="App">
			<Header>
				<Button color="inherit" size="large" to="/login" component={Link}>ログイン</Button>
			</Header>
			<SignUp />
		</div>
	)
}

export default LandingPage