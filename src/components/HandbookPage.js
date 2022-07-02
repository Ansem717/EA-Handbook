import '../css/handbook-page.css';
import { marked } from 'marked';

function HandbookPage(params) {

  const title = params.title;
  const content = params.content;

  const parsedContent = marked(content);

  return (
    <div>
      <h3 className='bookTitle'>{title}</h3>
      <p className='page' dangerouslySetInnerHTML={{__html: parsedContent}} ></p>
    </div>
  );
}

export default HandbookPage;
