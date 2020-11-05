import React from 'react';
import ReactDOM from 'react-dom';
import './i18n/i18n';
import './styling/index.css';
import Index  from './pages/HomePage';
import * as serviceWorker from './services/serviceWorker';
import { Route, Switch , BrowserRouter as Router} from 'react-router-dom'
import Recommender from './pages/Recommender';
import Result from './pages/Result'
import Guess from './pages/Guess'
import NavbarComponent from "./pages/commons/Navbar";


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/quiz/">
          <Recommender />
        </Route>
        <Route exact path="/results/">
          <Result />
        </Route>
        <Route exact path="/guess/">
          <Guess />
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
    <div className="App">
        <NavbarComponent />
        <header className="App-header">
            <Routes />
        </header>
    </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default Routes