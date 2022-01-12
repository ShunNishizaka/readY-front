import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";


function SuccessLinkage(){

    return(
        <Grid container component="main" sx={{ height: '100vh' }}>
			<CssBaseline />
				<Grid item className='login-box' xs={12} sm={12} md={12} component={Paper} elevation={6} square>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Avatar sx={{m:1,width: 56, height: 56 }}>
						</Avatar>
						<Typography  component="h1" variant="h5">
							     連携成功 ! 
                            <Box component="form" noValidate  sx={{ mt: 1 }}>
							    <Button
                                    sx={{mt: 3, mb: 2}}color="success"
                                    margin="normal"
                                    required
                                    fullWidth
								    type="submit"
								    variant="contained"
									to="/mypage"
                                    component={Link}
							    >
								    マイページに戻る
							    </Button>
						    </Box>
						</Typography>
					</Box>
				</Grid>
			</Grid>
    );
}
export default SuccessLinkage;