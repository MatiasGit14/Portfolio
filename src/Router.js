import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ComponentePrueba from './components/ComponentePrueba';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/ruta-prueba" component={ComponentePrueba} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
