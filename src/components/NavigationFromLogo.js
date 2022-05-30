import downArrow from '../images/down_arrow.svg';
import '../css/navigation-from-logo.css';

function NavigationFromLogo() {
  return (
    <nav className="navigation-from-logo">
        <ul className="nfl-main">
          <li>EA Handbook Project <img src={downArrow} className="leftArrow" alt=""/></li>
          <ul className="nfl-sub">
            <li>Why build a handbook?</li>
            <li>The power of community</li>
            <li>Reliable Sources and Forward Thinkers</li>
          </ul>
          <li>Become a member <img src={downArrow} className="leftArrow" alt="" /></li>
          <ul className="nfl-sub">
            <li>Join</li>
            <li>Donate</li>
          </ul>
          <li>More about us <img src={downArrow} className="leftArrow" alt="" /></li>
          <ul className="nfl-sub">
            <li>Meet the Team</li>
            <li>Contact Us</li>
          </ul>
        </ul>
    </nav>
  );
}

export default NavigationFromLogo;
