
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import LineLinkage from '../modules/lineLinkage.jsx';

const theme = createTheme();

function SettingPage(){


    return(
        <ThemeProvider theme={theme}>
			<LineLinkage/>
		</ThemeProvider>
    );
}
export default SettingPage;