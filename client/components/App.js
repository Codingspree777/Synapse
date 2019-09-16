import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './header';
import LoginPage from '../containers/loginContainer';
import UserDetails from '../containers/userContainer';
import ViewDetails from '../containers/viewContainer';
import TransDetails from '../containers/transContainer';
import './styles.css'



const App = () => {
  return (
    <Router>
      <div>
      <Header/>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/user" component={UserDetails} />
          <Route exact path="/viewaccounts" component={ViewDetails} />
          <Route exact path="/transactions" component={TransDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;