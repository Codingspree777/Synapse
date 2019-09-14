import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './header';
import Login from '../containers/login';
//import DashBoardContainer from '../containers/dashBoard'
import './styles.css'



const App = () => {
  return (
    <Router>
      <div>
      <Header/>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/dashBoard" component={DashBoardContainer} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;