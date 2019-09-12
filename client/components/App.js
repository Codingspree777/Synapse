import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './header';
import Home from './home';
import WoodContainer from '../containers/woodContainer';
import Success from './success';
import Cart from '../containers/cart';
import './styles.css'



const App = () => {
  return (
    <Router>
      <div>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;