import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../pages/NotFound.jsx';
import Login from '../pages/Login.jsx';
import Hamburguer from '../pages/Hamburguer.jsx';
import Pizza from '../pages/Pizza.jsx';
import Drinks from '../pages/Drinks.jsx';


class Content extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/hamburguer" component={ Hamburguer } />
          <Route exact path="/pizza" component={ Pizza } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default Content;
