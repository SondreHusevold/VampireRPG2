
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './animations.css'
import NavigationBar from './containers/navigation/navigationbar';
import NavigationRouter from './containers/navigation/router';
import { useState } from 'react';

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function setMobileMenu(bool: boolean) {
    setShowMobileMenu(bool);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar showMobileMenu={showMobileMenu} setShowMobileMenu={setMobileMenu} />
        <div hidden={showMobileMenu} className="vampPage">
          <NavigationRouter />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
