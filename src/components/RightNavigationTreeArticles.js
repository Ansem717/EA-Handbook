import '../css/right-navigation-tree.css';
import classNames from 'classnames';

function RightNavigationTreeArticles(props) {
  const rightNavigationTreeClasses = classNames('right-navigation-tree', {
    hidden: props.static,
  });

  const articles = (
  <li><b>Articles:</b>
    <ul>
      {props.articles.map((article) => (
        <li key={article.id}><a href={process.env.REACT_APP_URL_ARTICLES+article.id}>{article.attributes.title}</a></li>
      ))}
    </ul>
  </li>);

  return (
    <div className={rightNavigationTreeClasses}>
      <ul>
        {articles}
      </ul>
    </div>
  );
}

export default RightNavigationTreeArticles;
