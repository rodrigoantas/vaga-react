import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';


import Route from './Route'

import { AuthProvider } from '../contexts/AuthContext'

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import StoreDashboard from '../pages/StoreDashboard';
import Product from '../pages/Product';



const Routes: React.FC = () => (
  <AuthProvider>
    <Router>
      <Switch>
        <Route exact path="/store" component={StoreDashboard} isPrivate />
        <Route exact path="/store/:product" component={Product} isPrivate />
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Router>
  </AuthProvider>
  
  
);

export default Routes;
