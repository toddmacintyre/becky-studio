import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../components/App';
import About from '../components/About';
import Classes from '../components/Classes';
import NoMatch from '../components/NoMatch';

const Root = () => {
  return (
    <Router>
      <div>
        <Route exact={true} path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/classes" component={Classes} />
      </div>
    </Router>
  );
};

export default Root;
