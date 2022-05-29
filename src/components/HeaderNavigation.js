import logo from '../images/knight_logo.png';
import searchIcon from '../images/magnifying_glass.svg';
import profileIcon from '../images/profile.svg';
import '../css/header-navigation.css';

function HeaderNavigation() {
  return (
    <nav className="nav">
        <img src={logo} className="nav-logo" alt="logo" />
        <img src={searchIcon} className="nav-search" alt="search" />
        <img src={profileIcon} className="nav-profile" alt="profile" />
    </nav>
  );
}

export default HeaderNavigation;
