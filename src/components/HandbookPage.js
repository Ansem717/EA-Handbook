import '../css/handbook-page.css';
import { marked } from 'marked';

function HandbookPage(props) {

  const title = props.title;
  const content = props.content;

  const parsedContent = marked(content);

  return (
    <div className="page">
      <h3 className='page-title'>{title}</h3>
      <p className='page-content' dangerouslySetInnerHTML={{__html: parsedContent}} ></p>
    </div>
  );
}

export default HandbookPage;
