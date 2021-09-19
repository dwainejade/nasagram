import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PhotoProvider } from "./components/PhotoContext";
import "./App.css";

import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Search from "./Pages/Search";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <PhotoProvider>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/favorites" component={Favorites} />
            <Route path="/search" component={Search} />
          </Switch>
        </PhotoProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
