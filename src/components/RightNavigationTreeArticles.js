import '../css/right-navigation-tree.css';

function RightNavigationTreeArticles(props) {
  const ENDPOINT = '/articles/'

  const articles = (
  <li><b>Articles:</b>
    <ul>
      {props.articles.map((article) => (
        <li key={article.id}><a href={ENDPOINT+article.id}>{article.attributes.title}</a></li>
      ))}
    </ul>
  </li>);

  return (
    <div className="right-navigation-tree">
      <ul>
        {articles}
      </ul>
    </div>
  );
}

export default RightNavigationTreeArticles;
