import '../css/handbook.css';
import HandbookPage from './HandbookPage';
import Contribute from './ContribueButton';
import { Component } from 'react';
import axios from 'axios';

class Handbook extends Component {
  state = {
    id: 0,
    title: '',
    content: '',
    parentTopic: 0,
    prevTopic: 0,
    nextTopic: 0,
    subTopics: [],
    isLoading: true,
    error: null
  }

  componentDidMount() {
    axios('http://190.92.148.137:1337/api/topics/2?populate=subtopics')
      .then(response => {
        const data = response.data.data.attributes;
        const title = data.title;
        const content = data.content;
        const nextTopic = 2;
        const subTopics = [];
        for (const subtopic of data.subtopics.data) {
          subTopics.push(subtopic);
        };

        this.setState({
          title,
          content,
          nextTopic,
          subTopics,
          isLoading: false
        });
      })
      .catch(error => this.setState({error, isLoading:false}));
  }

  render() {
    const { isLoading, title, content, nextTopic, prevTopic, parentTopic, subTopics } = this.state;
    console.log(this.state);
    return (
      <div className='handbook'>
        {!isLoading ? (
          <>
            <HandbookPage title={title} content={content}/>
            <Contribute nextTopic={nextTopic} prevTopic={prevTopic} parentTopic={parentTopic} subTopics={subTopics} />
          </>
        ) : ("Loading...")}
      </div>
    );
  }
}

export default Handbook;
