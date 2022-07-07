import '../css/search-results.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function SearchResults(props) {
  const [topicsToSearch, updateTopicsToSearch] = useState([]);

  useEffect(() => {
    const fetchURL = 'http://190.92.148.137:1337/api/topics/?populate=parentTopic';
    //Get all topics and their linked parent topic

    axios(fetchURL)
      .then(response => {
        const data = response.data.data;
        data.forEach(topic => {
          updateTopicsToSearch(arr => [...arr, topic]);
        });
      })
      .catch(error => console.log(error));

    // const keyDownHandlerSearchResult = (event) => {
    //   if (event.key === 'Enter') {
    //     event.preventDefault();
    //     window.location.pathname = getFirstFilteredResult();
    //   }
    // }
    // document.addEventListener('keydown', keyDownHandlerSearchResult)
    // return () => {
    //   document.removeEventListener('keydown', keyDownHandlerSearchResult);
    // };

  }, []);

  const filteredData = topicsToSearch.filter((topic) => {
    if (props.input.length < 3) {
      return (!topic.attributes.parentTopic.data || 
             (topic.attributes.parentTopic.data && topic.attributes.parentTopic.data.id === 1)
             );
    } else {
      return (topic.attributes.title.toLowerCase().includes(props.input) || topic.attributes.content.toLowerCase().includes(props.input));
    }
  })
  
  return (
    <ul className='search-results'>
      {filteredData.map((item) => (
                // console.log(item.id)
                <li key={item.id}><a href={'/'+item.id}><span className='search-result-title'>{item.attributes.title}</span>
                <br /><span className='search-result-content'>Lorem Ipsum higlighting filter result</span></a></li>
      ))}
    </ul>
  );
}

export default SearchResults;
