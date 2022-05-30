import { useState } from 'react';
import logo from '../images/knight_logo.png';
import searchIcon from '../images/magnifying_glass.svg';
import profileIcon from '../images/profile.svg';
import '../css/header-navigation.css';
import NavigationFromLogo from './NavigationFromLogo';
import SearchNavigation from './SearchNavigation';

function HeaderNavigation() {
  const [logoNavOpen, setLogoNavOpen] = useState(false);
  const [searchNavOpen, setSearchNavOpen] = useState(false);

  return (
    <nav className="nav">
        <button
          aria-label='Toggle Main Menu Button'
          className="nav-logo-button"
          onClick={() => {
            setLogoNavOpen((logoNavOpen) => !logoNavOpen);
          }}
        >
          <img src={logo} className="nav-logo" alt="logo" />
        </button>
        <NavigationFromLogo open={logoNavOpen} />
        
        <button
          aria-label="toggle search menu button"
          className='nav-search-button'
          onClick={() => {
            setSearchNavOpen((searchNavOpen) => !searchNavOpen);
          }}
        >
          <img src={searchIcon} className="nav-search" alt="search" />
        </button>
        <SearchNavigation open={searchNavOpen} />

        <img src={profileIcon} className="nav-profile" alt="profile" />
    </nav>
  );
}

export default HeaderNavigation;
