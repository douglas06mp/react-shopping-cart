import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ProductList from './components/ProductList';
import CartList from './components/CartList';

export default function Router() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={400}
        appear={true}
      >
        <Switch location={location}>
          <Route exact path="/products" render={() => <ProductList />} />
          <Route exact path="/carts" render={() => <CartList />} />
          <Redirect to="/products" />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
