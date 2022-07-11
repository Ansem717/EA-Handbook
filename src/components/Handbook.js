import '../css/handbook.css';
import HandbookPage from './HandbookPage';
import ContributeButtonAndRightNav from './ContribueButtonAndRightNav';
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
    articles: [],
    isStaticArticle: false,
    isLoading: true,
    error: null
  }

  getSiblings(currentId, parentTopicID) {
    //0) VARIABLES
    const fetchURL = process.env.REACT_APP_URL + process.env.REACT_APP_URL_TOPICS;
    const populate = '?'+process.env.REACT_APP_POPULATE_STAR;
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

  getArticlesNotStatic() {
    const fetchURL = process.env.REACT_APP_URL + process.env.REACT_APP_URL_ARTICLES + '?' + process.env.REACT_APP_IS_NOT_STATIC + '&' + process.env.REACT_APP_SORT_UPDATED;
    axios(fetchURL)
    .then(response => {
        const articles = [];
        const data = response.data.data;
        for(const article of data) {
            articles.push(article);
        }

        this.setState({
          articles
        })
      })
      .catch(error => this.setState({error, isLoading:false}));
  }

  componentDidMount() {
    const fetchURL = process.env.REACT_APP_URL;
    const populate = '?' + process.env.REACT_APP_POPULATE_STAR;
    let target = window.location.pathname;
    if (target === '/') target = '/topics/1';
    const type = target.split("/")[1]; //"topics" or "articles"
    if (type !== 'topics' && type !== 'articles') {console.error("Incorrect URL. Halt"); return;}
    axios(fetchURL + target + populate)
      .then(response => {
        const data = response.data.data.attributes;
        const title = data.title;
        const content = data.content;

        if(type==='topics') {
          const parentTopic = data.parentTopic.data ? [data.parentTopic.data.id, data.parentTopic.data.attributes.title] : [0, ''];
          
          this.getSiblings(response.data.data.id, parentTopic[0]);

          const subTopics = [];
          for (const subtopic of data.subtopics.data) {
            subTopics.push(subtopic);
          };

          this.setState({
            parentTopic,
            subTopics
          });
        } else if (type === 'articles') {
          if (!data.isStatic) this.getArticlesNotStatic();
          this.setState({isStaticArticle: data.isStatic});
        }

        this.setState({
          title,
          content,
          isLoading: false
        });
      })
      .catch(error => this.setState({error, isLoading:false}));
  }

  render() {
    const { isLoading, title, content, nextTopic, prevTopic, parentTopic, subTopics, articles, isStaticArticle } = this.state;
    const CBARN = (parentTopic === 0) ?
      <ContributeButtonAndRightNav type='article' static={isStaticArticle} articles={articles} /> :
      <ContributeButtonAndRightNav type='topic' nextTopic={nextTopic} prevTopic={prevTopic} parentTopic={parentTopic} subTopics={subTopics} />
    return (
      <div className='handbook'>
        {!isLoading ? (
          <>
            <HandbookPage title={title} content={content}/>
            {CBARN}
          </>
        ) : ("Loading... If this takes a while, make sure your URL is correct.")}
      </div>
    );
  }
}

export default Handbook;
