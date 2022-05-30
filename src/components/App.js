import HeaderNavigation from './HeaderNavigation';
import Handbook from './Handbook';
import '../css/app.css';
import NavigationFromLogo from './NavigationFromLogo';

function App() {
  return (
    <div className="app">
        <HeaderNavigation />
        <NavigationFromLogo />
        <Handbook />
    </div>
  );
}

export default App;
