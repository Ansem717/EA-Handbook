import searchIcon from '../images/magnifying_glass.svg';
import { TextField, InputAdornment, Box } from '@mui/material';
import SearchResults from './SearchResults';
import '../css/search-navigation.css';
import classNames from 'classnames';
import { useState } from 'react';

function SearchNavigation({ open }) {
  const displaySearchNav = classNames('search-navigation', {
    open: open,
  });

  const [inputText, setInputText] = useState("");
  let searchHandler = (e) => {
    var lowercase = e.target.value.toLowerCase();
    setInputText(lowercase);
  }

  return (
    <nav className={displaySearchNav}>
      <Box m={1}>
        <TextField
            id="outlined-basic"
            variant="outlined"
            onChange={searchHandler}
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
      <SearchResults input={inputText} />
    </nav>
  );
}

export default SearchNavigation;
