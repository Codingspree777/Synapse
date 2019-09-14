import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './header';
import LoginPage from '../containers/loginContainer';
//import DashBoardContainer from '../containers/dashBoardContainer'
import './styles.css'



const App = () => {
  return (
    <Router>
      <div>
      <Header/>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          {/* <Route exact path="/dashBoard" component={DashBoardContainer} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;