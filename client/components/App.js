import React from 'react';
import LoginPage from '../containers/loginContainer';
import UserDetails from '../containers/userContainer';
import ViewDetails from '../containers/viewContainer';
import TransDetails from '../containers/transContainer';
import CreateForm from '../containers/createContainer';
import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import {
  START_PAGE,
  LOGIN_PAGE,
  USER_PAGE,
  VIEW_ACCOUNTS_PAGE,
  TRANSACTION_PAGE,
  CREATE_TRANSACTION_PAGE
} from '../constants/pathConstants.js';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Redirect exact from={START_PAGE} to={LOGIN_PAGE} />
          <Route exact path={LOGIN_PAGE} component={LoginPage} />
          <Route exact path={USER_PAGE} component={UserDetails} />
          <Route exact path={VIEW_ACCOUNTS_PAGE} component={ViewDetails} />
          <Route exact path={TRANSACTION_PAGE} component={TransDetails} />
          <Route exact path={CREATE_TRANSACTION_PAGE} component={CreateForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
