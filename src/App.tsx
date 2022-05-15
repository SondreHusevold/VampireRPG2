
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './animations.css'
import NavigationBar from './containers/navigation/navigationbar';
import NavigationRouter from './containers/navigation/router';
import { useState } from 'react';

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
        <div hidden={showMobileMenu} className="vampPage">
          <NavigationRouter />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
