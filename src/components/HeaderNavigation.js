import { useState, useRef } from 'react';
import logo from '../images/knight_logo.png';
import searchIcon from '../images/magnifying_glass.svg';
import profileIcon from '../images/profile.svg';
import '../css/header-navigation.css';
import NavigationFromLogo from './NavigationFromLogo';
import SearchNavigation from './SearchNavigation';
import ProfileNavigation from './ProfileNavigation';

function HeaderNavigation() {
  const [logoNavOpen, setLogoNavOpen] = useState(false); 
  const [searchNavOpen, setSearchNavOpen] = useState(false);
  const [profileNavOpen, setProfileNavOpen] = useState(false);
  
  const logoButtonRef = useRef(null);
  const searchButtonRef = useRef(null);
  const profileButtonRef = useRef(null);
  
  return (
    <nav className="nav">
        <button
          ref={logoButtonRef}
          aria-label='Toggle Main Menu Button'
          className="nav-logo-button"
          onClick={() => {
            setSearchNavOpen(false);
            setProfileNavOpen(false);
            setLogoNavOpen((logoNavOpen) => !logoNavOpen);
          }}
        >
          <img src={logo} className="nav-logo" alt="logo" />
        </button>
        <NavigationFromLogo open={logoNavOpen} onClickOutside={() => {setLogoNavOpen(false)}} buttonRef={logoButtonRef} />
        
        <button
          ref={searchButtonRef}
          aria-label="toggle search menu button"
          className='nav-search-button'
          onClick={() => {
            setLogoNavOpen(false);
            setProfileNavOpen(false);
            setSearchNavOpen((searchNavOpen) => !searchNavOpen);
          }}
        >
          <img src={searchIcon} className="nav-search" alt="search" />
        </button>
        <SearchNavigation open={searchNavOpen} onClickOutside={() => {setSearchNavOpen(false)}} buttonRef={searchButtonRef} />

        <button
          ref={profileButtonRef}
          aria-label="toggle profile menu button"
          className='nav-profile-button'
          onClick={() => {
            setSearchNavOpen(false);
            setLogoNavOpen(false);
            setProfileNavOpen((profileNavOpen) => !profileNavOpen);
          }}
        >
          <img src={profileIcon} className="nav-profile" alt="profile" />
        </button>
        <ProfileNavigation open={profileNavOpen} onClickOutside={() => {setProfileNavOpen(false)}} buttonRef={profileButtonRef} />
    </nav>
  );
}

export default HeaderNavigation;
