import searchIcon from '../images/magnifying_glass.svg';
import { TextField, InputAdornment, Box } from '@mui/material';
import SearchResults from './SearchResults';
import '../css/search-navigation.css';
import classNames from 'classnames';
import { useState, useRef, useEffect } from 'react';

function SearchNavigation(props) {
  const displaySearchNav = classNames('search-navigation', {
    open: props.open,
  });

  const [inputText, setInputText] = useState("");
  let searchHandler = (e) => {
    var lowercase = e.target.value.toLowerCase();
    setInputText(lowercase);
  }

  const ref = useRef(null);
  const buttonRef = props.buttonRef;
  const { onClickOutside } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ onClickOutside, buttonRef ]);

  return (
    <nav ref={ref} className={displaySearchNav}>
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
