import { useEffect, useRef, useState } from 'react';
import '../css/navigation-from-logo.css';
import classNames from 'classnames';
import axios from 'axios';

function NavigationFromLogo(props) {
  const displayLogoNavLinks = classNames('navigation-from-logo', {
    open: props.open,
  });

  const ref = useRef(null);
  const buttonRef = props.buttonRef;
  const { onClickOutside } = props;

  const [staticArticles, updateStaticArticles] = useState([]);

  useEffect(() => {
    const fetchURL = process.env.REACT_APP_URL + process.env.REACT_APP_URL_ARTICLES + '?' + process.env.REACT_APP_IS_STATIC + '&' + process.env.REACT_APP_SORT_ORDER;
    axios(fetchURL)
      .then(response => {
        const data = response.data.data;
        for(const article of data) {
          updateStaticArticles(arr => [...arr, article]);
        }
      }).catch(error => {console.error("Error when fetching static articles in NavigationFromLogo.js")});
    }, []);
    
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
          {staticArticles.map((article) => (
            <li key={article.id}>
              <a href={process.env.REACT_APP_URL_ARTICLES + article.id}>{article.attributes.title}</a>
            </li>
          ))}
        </ul>
    </nav>
  );
}

export default NavigationFromLogo;
