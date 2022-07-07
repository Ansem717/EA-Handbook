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

  getSiblings(currentId, parentTopicID) {
    //0) VARIABLES
    const fetchURL = 'http://190.92.148.137:1337/api/topics/';
    const populate = '?populate=*';
    let prevTopic = [];
    let nextTopic = [];

    //1) IF HAS PARENT, GO TO PARENT
    if (parentTopicID === 0) {
      //If doens't have parent, push [0, ''] to siblings and leave.
      prevTopic = [0, ""];
      nextTopic = [0, ""];

      this.setState({
        prevTopic,
        nextTopic
      });

      return;
    }

    //go to parent
    axios(fetchURL + parentTopicID + populate)
      .then(response => {

        //2) GET PARENTS CHILDREN
        const siblingTopics = [];
        for (const siblingTopic of response.data.data.attributes.subtopics.data) {
          siblingTopics.push(siblingTopic);
        }

        //3) FIND CURRENT TOPIC WITHIN CHILDREN
        let myIndex = -1;
        for (let i = 0; i < siblingTopics.length; i++) {
          const e = siblingTopics[i];
          if (e.id === currentId) {
            myIndex = i;
            break;
          }
        }
        if (myIndex === -1) console.log("ERROR, MyIndex is -1, self not found when looking for siblings!");

        //4) RETURN PREV TOPIC AND NEXT TOPIC
        prevTopic = (myIndex === 0) ? 
                      [0, ""] :
                      [siblingTopics[myIndex-1].id, siblingTopics[myIndex-1].attributes.title];

        nextTopic = (myIndex === siblingTopics.length-1) ?
                      [0, ""] : 
                      [siblingTopics[myIndex+1].id, siblingTopics[myIndex+1].attributes.title];

        this.setState({
          prevTopic,
          nextTopic
        })
      })
      .catch(error => this.setState({error, isLoading:false}));
  }

  componentDidMount() {
    const fetchURL = 'http://190.92.148.137:1337/api/topics';
    const populate = '?populate=*';
    let target = window.location.pathname;
    if (target === '/') target = '/1';
    axios(fetchURL + target + populate)
      .then(response => {
        const data = response.data.data.attributes;
        const title = data.title;
        const content = data.content;
        const parentTopic = data.parentTopic.data ? [data.parentTopic.data.id, data.parentTopic.data.attributes.title] : [0, ''];
        
        this.getSiblings(response.data.data.id, parentTopic[0]);

        const subTopics = [];
        for (const subtopic of data.subtopics.data) {
          subTopics.push(subtopic);
        };

        this.setState({
          title,
          content,
          parentTopic,
          subTopics,
          isLoading: false
        });
      })
      .catch(error => this.setState({error, isLoading:false}));
  }

  render() {
    const { isLoading, title, content, nextTopic, prevTopic, parentTopic, subTopics } = this.state;
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
