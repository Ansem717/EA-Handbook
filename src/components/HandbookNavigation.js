import hamburger from '../images/hamburger_menu_icon.svg';
import '../css/handbook-navigation.css';

function HandbookNavigation() {
  return (
    <div className='handbook-navigation'>
      <h3 className='contribute'><img src={hamburger} className="hamburger" alt="profile" />Contribute</h3>
    </div>
  );
}

export default HandbookNavigation;
