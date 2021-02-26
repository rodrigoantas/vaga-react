import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';


import Route from './Route'

import { AuthProvider } from '../contexts/AuthContext'

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';


const Routes: React.FC = () => (
  <AuthProvider>
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  </AuthProvider>
  
  
);

export default Routes;
