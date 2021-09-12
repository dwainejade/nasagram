import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home'
import Favorites from './Pages/Favorites'
import Search from './Pages/Search'
import Header from './components/Header'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/favorites' component={Favorites} />
          <Route path='/search' component={Search} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
