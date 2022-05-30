import { useState } from 'react';
import logo from '../images/knight_logo.png';
import searchIcon from '../images/magnifying_glass.svg';
import profileIcon from '../images/profile.svg';
import '../css/header-navigation.css';
import NavigationFromLogo from './NavigationFromLogo';

function HeaderNavigation() {
  const [logoNavOpen, setLogoNavOpen] = useState(false);

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
        <img src={searchIcon} className="nav-search" alt="search" />
        <img src={profileIcon} className="nav-profile" alt="profile" />
    </nav>
  );
}

export default HeaderNavigation;
