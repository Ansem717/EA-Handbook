import { useState } from 'react';
import hamburger from '../images/hamburger_menu_icon.svg';
import '../css/contribute.css';
import RightNavigationTreeTopics from './RightNavigationTreeTopics';
import RightNavigationTreeArticles from './RightNavigationTreeArticles';
import classNames from 'classnames';

function ContributeButtonAndRightNav(props) {
  const [contributeOpen, setContributeOpen] = useState(false);

  const displayContributeButton = classNames('contribute-button', {
    open: !contributeOpen,
  });

  const RightTree = (props.type === 'article') ?
    <RightNavigationTreeArticles static={props.static} articles={props.articles} /> :
    <RightNavigationTreeTopics nextTopic={props.nextTopic} prevTopic={props.prevTopic} parentTopic={props.parentTopic} subTopics={props.subTopics} />;

  return (
    <div className='contribute-main'>
      <p className={displayContributeButton}>
        <button
          aria-label='Toggle Contribute Button'
          className="contribute-button"
          onClick={() => {
            setContributeOpen((contributeOpen) => !contributeOpen);
          }}
        >
          <img src={hamburger} className="hamburger" alt="contribute" /> Contribute
        </button>
      </p>

      {/* TODO: Implement Contribute Menu */}

      {RightTree}
    </div>
  );
}

export default ContributeButtonAndRightNav;
