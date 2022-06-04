import { useState } from 'react';
import hamburger from '../images/hamburger_menu_icon.svg';
import saveIcon from '../images/save.png';
import closeIcon from '../images/close.png';
import '../css/contribute.css';
import ContributeMenu from './ContributeMenu';
import classNames from 'classnames';

function Contribute() {
  const [contributeOpen, setContributeOpen] = useState(false);

  const displayContributeButton = classNames('contribute-button', {
    open: !contributeOpen,
  });

  const displayContributeEdit = classNames('contribute-edit-button', {
    open: contributeOpen,
  });

  return (
    <div className='contribute-main'>
      <p className={displayContributeButton}>
        <button
          aria-label='Toggle Contribute Button'
          className="edit-button"
          onClick={() => {
            setContributeOpen((contributeOpen) => !contributeOpen);
          }}
        >
          <img src={hamburger} className="hamburger" alt="contribute" />Contribute
        </button>
      </p>

      <p className={displayContributeEdit}>
        <button
          aria-label='Save Contribute Button'
          className="save-button"
          onClick={() => {
            console.log("SAVE EDITED CONTENT");
            setContributeOpen((contributeOpen) => !contributeOpen);
          }}
        >
          <img src={saveIcon} className="save" alt="save" />Save
        </button>
        <button
          aria-label='Cancel Contribute Button'
          className="cancel-button"
          onClick={() => {
            console.log("CANCEL EDITED CONTENT");
            setContributeOpen((contributeOpen) => !contributeOpen);
          }}
        >
          <img src={closeIcon} className="cancel" alt="cancel" />Cancel
        </button>
      </p>

      <ContributeMenu open={contributeOpen} />
    </div>
  );
}

export default Contribute;
