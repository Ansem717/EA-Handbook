import '../css/handbook.css';
import HandbookPage from './HandbookPage';
import HandbookNavigation from './HandbookNavigation';

function Handbook() {
  return (
    <div className='handbook'>
      <HandbookPage />
      <HandbookNavigation />
    </div>
  );
}

export default Handbook;
