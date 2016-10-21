import React from 'react';
import { Route, Router, hashHistory as history } from 'react-router';
import HelloWorld from './hello-world/HelloWorld';

export default () => {
  return (
    <Router history={history}>
      <Route path="/" component={HelloWorld} />
    </Router>
  );
};
