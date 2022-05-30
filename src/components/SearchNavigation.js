import searchIcon from '../images/magnifying_glass.svg';
import { TextField, InputAdornment, Box } from '@mui/material';
import SearchResults from './SearchResults';
import '../css/search-navigation.css';
import classNames from 'classnames';

function SearchNavigation({ open }) {
  const displaySearchNav = classNames('search-navigation', {
    open: open,
  });

  return (
    <nav className={displaySearchNav}>
      <Box m={1}>
        <TextField
            id="outlined-basic"
            variant="outlined"
            className='search-box'
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <img src={searchIcon} className="search-icon" alt="search" />
                </InputAdornment>
              ),
            }}
        />
      </Box>
      <SearchResults />
    </nav>
  );
}

export default SearchNavigation;
