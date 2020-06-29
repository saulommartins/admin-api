import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import * as R from 'ramda';

import GlobalStyles from './styles/GlobalStyles';
import Dashboard from './components/Dashboard';
import Login from './modules/Login';
import authService from './services/auth.service';

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = (props) => {
  const user = authService.getCurrentUser();
  console.log("user", user, R.isNil(user));
  if (user) {
    console.log("not is nill ");
    return (
      <Route
        path={props.path}
        exact={props.exact}
        component={props.component} 
      />
    );   
  }
  console.log("is nill ");
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
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/admin" component={Dashboard} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute path='*' exact={true} component={Login} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;

