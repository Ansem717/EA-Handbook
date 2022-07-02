import { useState } from 'react';
import hamburger from '../images/hamburger_menu_icon.svg';
import '../css/contribute.css';
import RightNavigationTree from './RightNavigationTree';
import classNames from 'classnames';

function Contribute(props) {
  const [contributeOpen, setContributeOpen] = useState(false);

  const displayContributeButton = classNames('contribute-button', {
    open: !contributeOpen,
  });

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

      <RightNavigationTree nextTopic={props.nextTopic} prevTopic={props.prevTopic} parentTopic={props.parentTopic} subTopics={props.subTopics} />
    </div>
  );
}

export default Contribute;
