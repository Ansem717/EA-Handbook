import '../css/handbook.css';
import HandbookPage from './HandbookPage';
import Contribute from './ContribueButton';

function Handbook() {
  return (
    <div className='handbook'>
      <HandbookPage />
      <Contribute />
    </div>
  );
}

export default Handbook;
