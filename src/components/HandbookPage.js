import '../css/handbook-page.css';
import { Component } from 'react';
import axios from 'axios';
import { marked } from 'marked';

class HandbookPage extends Component {
  state = {
    title: '',
    content: '',
    isLoading: true,
    error: null,
  }

  componentDidMount() {
    axios('http://190.92.148.137:1337/api/topics/1')
      .then(response => {
        const data = response.data;
        console.log(data);
        const title = data.data.attributes.title;
        const content = data.data.attributes.content;

        this.setState({
          title,
          content,
          isLoading: false
        });
      })
      .catch(error => this.setState({error, isLoading:false}));
  };

  render() {
    const { isLoading, title, content } = this.state;
    const parsedContent = marked(content);
    return (
      <div>
        <h3 className='bookTitle'>{!isLoading ? title : "Loading..." }</h3>
        <p className='page' dangerouslySetInnerHTML={{__html: parsedContent}} ></p>
      </div>
    );
  }
}

export default HandbookPage;
