import searchIcon from '../images/magnifying_glass.svg';
import { TextField, InputAdornment, Grid } from '@mui/material';
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

  useEffect(() => {
    const clearTextbox = (event) => {
      console.log("useEffect clearTextbox onTransitionEnd");
      event.target.value = "";
      setInputText("");
    };

    const refCurr = ref.current;

    refCurr.addEventListener('transitionend', clearTextbox, true);
    return () => {
      refCurr.addEventListener('transitionend', clearTextbox, true);
    };
  }, []);

  return (
    <nav ref={ref} className={displaySearchNav}>
      <Grid container direction="column" className="search-container">
        <button
          aria-label='Close Search Button'
          className='close-search-bar-button'
          onClick={() => {
            props.onClickOutside()
          }}
        >
          <div className='close-search-bar one'></div>
          <div className='close-search-bar two'></div>
        </button>
        <TextField
            id="outlined-basic"
            variant="outlined"
            onChange={searchHandler}
            className='search-field'

            onKeyPress={(ev) => {
              if (ev.key === 'Enter') {
                props.onClickOutside();
                console.log("onKeyPress Enter");
                ev.target.value = "";
                setInputText("");
                ev.preventDefault();
              }
            }}

            sx={{
              minWidth: 0.4,
              mr: 20
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <img src={searchIcon} className="search-icon" alt="search" />
                </InputAdornment>
              ),
              style: {
                fontSize: 20,
                fontWeight: 'bold'
              }
            }}
        />
      <SearchResults input={inputText} />
      </Grid>
    </nav>
  );
}

export default SearchNavigation;
