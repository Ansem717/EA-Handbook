import { useState, useEffect, useRef } from 'react';
import downArrow from '../images/down_arrow.svg';
import '../css/navigation-from-logo.css';
import classNames from 'classnames';

function NavigationFromLogo(props) {
  const displayLogoNavLinks = classNames('navigation-from-logo', {
    open: props.open,
  });

  const [handbookSubOpen, setHandbookSubOpen] = useState(false);
  const displayHandbookSubLinks = classNames('nfl-sub', {
    open: handbookSubOpen,
  });
  const displayHandbookArrow = classNames('left-arrow', {
    open: handbookSubOpen,
  })

  const [memberSubOpen, setMemberSubOpen] = useState(false);
  const displayMemberSubLinks = classNames('nfl-sub-small', {
    open: memberSubOpen,
  });
  const displayMemberArrow = classNames('left-arrow', {
    open: memberSubOpen,
  })

  const [aboutSubOpen, setAboutSubOpen] = useState(false);
  const displayAboutSubLinks = classNames('nfl-sub-small', {
    open: aboutSubOpen,
  });
  const displayAboutArrow = classNames('left-arrow', {
    open: aboutSubOpen,
  })

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
    <nav ref={ref} className={displayLogoNavLinks}>
        <ul className="nfl-main">
          <li>
            <button className='sub-button'
             onClick={() => {
               setHandbookSubOpen((handbookSubOpen) => !handbookSubOpen);
             }}
            >
              EA Handbook Project <img src={downArrow} className={displayHandbookArrow} alt=""/>
            </button>
          </li>
          <ul className={displayHandbookSubLinks}>
            <li>Why build a handbook?</li>
            <li>The power of community</li>
            <li>Reliable Sources and Forward Thinkers</li>
          </ul>
          <li>
            <button className='sub-button'
             onClick={() => {
               setMemberSubOpen((memberSubOpen) => !memberSubOpen);
             }}
            >
              Become a member <img src={downArrow} className={displayMemberArrow} alt="" />
            </button>
          </li>
          <ul className={displayMemberSubLinks}>
            <li>Join</li>
            <li>Donate</li>
          </ul>
          <li>
            <button className='sub-button'
             onClick={() => {
               setAboutSubOpen((aboutSubOpen) => !aboutSubOpen);
             }}
            >
              More about us <img src={downArrow} className={displayAboutArrow} alt="" />
            </button>
          </li>
          <ul className={displayAboutSubLinks}>
            <li>Meet the Team</li>
            <li>Contact Us</li>
          </ul>
        </ul>
    </nav>
  );
}

export default NavigationFromLogo;
