
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './animations.css'
import NavigationBar from './containers/navigation/navigationbar';
import NavigationRouter from './containers/navigation/router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <div className="vampPage">
          <NavigationRouter />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
