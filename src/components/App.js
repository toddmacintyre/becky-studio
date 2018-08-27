import React from 'react';
import { Route, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import '../styles/main.scss';
import Header from './Header';
import Wave from './svg/Wave';
import Home from './Home';
import About from './About';
import Classes from './Classes';

// TODO: add hot module reloading
// TODO: add parallax: https://github.com/jscottsmith/react-scroll-parallax
// TODO: add react router transitions: https://popmotion.io/pose/learn/route-transitions-reach-router/

const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 300,
    beforeChildren: true,
  },
  exit: { opacity: 0 }
});

class App extends React.Component {
  render() {
    return (
      <Route
        render={({ location }) => {
          return (
            <div id="site-container">
              <div id="content-container">
                <Header />
                <Wave />
                <PoseGroup>
                  <RoutesContainer key={location.pathname}>
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      <Route path="/about" component={About} />
                      <Route path="/classes" component={Classes} />
                    </Switch>
                  </RoutesContainer>
                </PoseGroup>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default App;
