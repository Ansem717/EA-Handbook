import { useRef, useEffect } from 'react';
import chatIcon from '../images/chat_bubble.svg';
import fileIcon from '../images/file_icon.svg';
import listIcon from '../images/listIcon.svg';
import meetupIcon from '../images/meetup.svg';
import '../css/navigation-from-profile.css';
import classNames from 'classnames';

function ProfileNavigation(props) {
  const displayProfileNavLinks = classNames('navigation-from-profile', {
    open: props.open,
  });

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
    <nav ref={ref} className={displayProfileNavLinks}>
        <ul className="nfp-main">
          <li><img src={listIcon} className="nfp-icon" alt="" />List of Members & Companies</li>
          <li><img src={chatIcon} className="nfp-icon" alt="" />Chat with other members</li>
          <li><img src={fileIcon} className="nfp-icon" alt="" />Share files among architects</li>
          <li><img src={meetupIcon} className="nfp-icon" alt="" />Join or List a local meetup</li>
        </ul>
    </nav>
  );
}

export default ProfileNavigation;
