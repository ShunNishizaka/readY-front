import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BookInfo from './bookInfo';
import FavoriteAuthor from './favoriteAuthor';
import SeriesInfo from './seriesInfo';
import { get_user_books_info } from '../request'
import { useLocation } from 'react-router-dom';
import { useAsyncRun, useAsyncTask} from "react-hooks-async"

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

const fetchUsersBookResult = async ({signal}, token) => {
	return await get_user_books_info(token)
}

function FullWidthTabs() {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);
	const task = useAsyncTask(fetchUsersBookResult)
	const { pending, error, result, abort } = task;
	useAsyncRun(task, localStorage.getItem("token"))

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	return (
		//<MyPageHeader />
		<Box sx={{ bgcolor: 'background.paper', width: 1 }}>
			<AppBar position="static">
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="secondary"
					textColor="inherit"
					variant="fullWidth"
					aria-label="full width tabs example"
				>
					<Tab label="お気に入り書籍" {...a11yProps(0)} />
					<Tab label="お気に入り作者" {...a11yProps(1)} />
					<Tab label="お気に入りシリーズ" {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				<TabPanel value={value} index={0} dir={theme.direction}>
				{pending ? "Loading..." : <BookInfo bookInfos={result}/>}
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					<FavoriteAuthor bookInfos={[]}></FavoriteAuthor>
				</TabPanel>
				<TabPanel value={value} index={2} dir={theme.direction}>
					<SeriesInfo bookInfos={[]}></SeriesInfo>
				</TabPanel>
			</SwipeableViews>
		</Box>
	);
}

export default FullWidthTabs;