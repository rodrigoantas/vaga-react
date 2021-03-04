import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';


import Route from './Route'

import { AuthProvider } from '../contexts/AuthContext'
import { CartProvider } from '../contexts/CartContext'

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import StoreDashboard from '../pages/StoreDashboard';
import Product from '../pages/Product';
import Cart from '../pages/Cart';



const Routes: React.FC = () => (
  <AuthProvider>
    <CartProvider>
      <Router>
        <Switch>
          <Route exact path="/store" component={StoreDashboard} isPrivate />
          <Route exact path="/cart" component={Cart} isPrivate />
          <Route exact path="/store/:product" component={Product} isPrivate />
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </CartProvider>
  </AuthProvider>
  
  
);

export default Routes;
