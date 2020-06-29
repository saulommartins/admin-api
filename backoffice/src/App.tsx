import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import * as R from 'ramda';

import GlobalStyles from './styles/GlobalStyles';
import Dashboard from './components/Dashboard';
import SignIn from './modules/SignIn';
import SignUp from './modules/SignUp';
import authService from './services/auth.service';

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = (props) => {
  const user = authService.getCurrentUser();
  if (user) {
    return (
      <Route
        path={props.path}
        exact={props.exact}
        component={props.component} 
      />
    );   
  }
  return (
    <Redirect 
      to="/login"
    />
  );
};


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/register" component={SignUp} />
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/admin" component={Dashboard} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute path='*' exact={true} component={SignIn} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;

