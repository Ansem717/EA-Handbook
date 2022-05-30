import data from '../js/ListData.json';
import '../css/search-results.css';

function SearchResults(props) {
  const filteredData = data.filter((el) => {
    if (props.input === '') {
      return el;
    } else {
      return el.text.toLowerCase().includes(props.input);
    }
  })
  return (
    <ul className='search-results'>
      {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export default SearchResults;
