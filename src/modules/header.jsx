import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));






export default function Header(props) {

  const navigate = useNavigate();

  function SearchBox(props) {
    return (
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={props.placeholder ? props.placeholder : 'Search...'}
          inputProps={{ 'aria-label': 'search' }}
          name='value'
          onKeyPress={(e)=>keyPress(e)}
        />
      </Search>
    )
  }

  async function keyPress(e){
    if(e.key === 'Enter'){
      let serchKeyword = ( e.target.value || '' ).replace( /^\s+|\s+$/g, '' ); 
      if(serchKeyword != ""){
        e.preventDefault();
        navigate("/searchresult", { state: {
          searchKeyword: serchKeyword
        }});
      }
    }
  }

  return (
    <AppBar position="static">
      <Container maxWidth="99%">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, flexGrow: 0 }}
          >
            Read-Y
          </Typography>
          {props.searchBox && <SearchBox placeholder={props.placeholder}/>}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0 }}>
          {props.children}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}