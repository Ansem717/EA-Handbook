import chatIcon from '../images/chat_bubble.svg';
import fileIcon from '../images/file_icon.svg';
import listIcon from '../images/listIcon.svg';
import meetupIcon from '../images/meetup.svg';
import '../css/navigation-from-profile.css';
import classNames from 'classnames';

function ProfileNavigation({ open }) {
  const displayProfileNavLinks = classNames('navigation-from-profile', {
    open: open,
  });

  return (
    <nav className={displayProfileNavLinks}>
        <ul className="nfp-main">
          <li><img src={listIcon} class="nfp-icon" alt="" />List of Members & Companies</li>
          <li><img src={chatIcon} class="nfp-icon" alt="" />Chat with other members</li>
          <li><img src={fileIcon} class="nfp-icon" alt="" />Share files among architects</li>
          <li><img src={meetupIcon} class="nfp-icon" alt="" />Join or List a local meetup</li>
        </ul>
    </nav>
  );
}

export default ProfileNavigation;
