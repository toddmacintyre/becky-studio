import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Wave from './svg/Wave';
import Home from './Home';
import About from './About';
import Classes from './Classes';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Wave />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/classes" component={Classes} />
      </div>
    );
  }
}

export default App;
