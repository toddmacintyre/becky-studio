import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import Header from './Header';
import Wave from './svg/Wave';
import Home from './Home';
import About from './About';
import Classes from './Classes';
import withContainer from './withContainer';

// TODO: add burger menu

const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 300,
    beforeChildren: true,
  },
  exit: { opacity: 0 },
});

class App extends React.Component {
  render() {
    return (
      <Route
        render={({ location }) => {
          return (
            <div id="site-container">
              <Header />
              <Wave />
              <PoseGroup className="my-class">
                <RoutesContainer key={location.pathname}>
                  <Switch location={location}>
                    <Route exact path="/" component={withContainer(Home)} />
                    <Route path="/about" component={withContainer(About)} />
                    <Route path="/classes" component={withContainer(Classes)} />
                  </Switch>
                </RoutesContainer>
              </PoseGroup>
            </div>
          );
        }}
      />
    );
  }
}

export default hot(module)(App);
