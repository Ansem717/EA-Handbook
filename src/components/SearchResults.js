import '../css/search-results.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function SearchResults(props) {
  const [contentToSearch, updateContentToSearch] = useState([]);

  useEffect(() => {
    const topicsURL = 'http://190.92.148.137:1337/api/topics/?populate=parentTopic';
    //Get all topics and their linked parent topic
    
    const articlesURL = 'http://190.92.148.137:1337/api/articles/'
    //get all articles

    axios(topicsURL)
      .then(response => {
        const data = response.data.data;
        data.forEach(topic => {
          updateContentToSearch(arr => [...arr, topic]);
        });
      })
      .catch(error => console.log(error));

    axios(articlesURL)
      .then(response => {
        const data = response.data.data;
        data.forEach(article => {
          updateContentToSearch(arr => [...arr, article]);
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

  const filteredData = contentToSearch.filter((content) => {
    if (props.input.length < 3) {
      return (content.attributes.parentTopic && 
             (!content.attributes.parentTopic.data || 
             (content.attributes.parentTopic.data && content.attributes.parentTopic.data.id === 1))
             );
    } else {
      return (content.attributes.title.toLowerCase().includes(props.input) || content.attributes.content.toLowerCase().includes(props.input));
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
