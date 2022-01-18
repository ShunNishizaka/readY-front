import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';


export default function LineLinkage(){
	const [lineIDMessage, setLINEIDMessage] = React.useState('');
	const [lineIDCheck, setLINEIDCheck] = React.useState(true);
	
	function handleChange(event) {
		const name = event.target.name;
        const value = event.target.value;
		let validated;
		switch(name) {
			case "lineID":
				validated = lineIDValidation(value)
				setLINEIDMessage(validated);
				setLINEIDCheck(validated);
				return
			default:
				return
		}
	}

	function lineIDValidation(value) {
		if(!value) return 'LINE IDを入力してください。' ;
		return '';
	};

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
						<Typography component="h1" variant="h5">
							LINE IDと連携
						</Typography>
                        <Box component="form" noValidate  sx={{ mt: 1 }}>
							<TextField
								margin="normal"
								required
								fullWidth
								id="lineId"
								label="LINE ID"
								name="lineID"
								autoComplete="lineID"
								error={lineIDMessage}
								helperText={lineIDMessage}
								autoFocus
								onChange={handleChange}

							/>
							<Button
                                    sx={{mt: 3, mb: 2}}
                                    color="success"
                                    margin="normal"
                                    required
                                    fullWidth
								    type="submit"
								    variant="contained"
									to="/successlinkage"
									component={Link}
									disabled ={lineIDCheck}
							    >
								    LINE ID連携
							</Button>
						</Box>
					</Box>
				</Grid>
			</Grid>
    );
}