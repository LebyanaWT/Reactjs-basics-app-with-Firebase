import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import  * as firebase from './components/fire';
import * as routes from './components/routes';
import Navigation from './components/Navigation';
import * as LandingPage from './components/Landing/LandingPage';
import * as SignUpPage from './components/register/SignUpPage';
import * as SignInPage from './components/login/SignInPage';
import * as HomePage from './components/Home/HomePage';
import * as PasswordForgetPage from './components/password/PasswordForgetPage';
import * as AccountPage from './components/Account/AccountPage';

const App = () =>
  <Router>
   <div>
      <Navigation />
      <hr/>
      <Route
        exact path={routes.LANDING}
        component={() => <LandingPage />}
      />
      <Route
        exact path={routes.SIGN_UP}
        component={() => <SignUpPage />}
      />
      <Route
        exact path={routes.SIGN_IN}
        component={() => <SignInPage />}
      />
      <Route
        exact path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />
      <Route
        exact path={routes.HOME}
        component={() => <HomePage />}
      />
      <Route
        exact path={routes.ACCOUNT}
        component={() => <AccountPage />}
      />
    </div>
  </Router>
export default App;
