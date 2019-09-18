import React from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LoginPage from '../containers/loginContainer';
import UserDetails from '../containers/userContainer';
import ViewDetails from '../containers/viewContainer';
import TransDetails from '../containers/transContainer';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Redirect exact from='/' to='/login' />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/user' component={UserDetails} />
          <Route exact path='/viewaccounts' component={ViewDetails} />
          <Route exact path='/transactions' component={TransDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
