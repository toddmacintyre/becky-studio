import React, { Component } from 'react';
import { Container } from './Posed';

const withContainer = (InputComponent, opts) => {
  return class extends Component {
    render() {
      return (
        <Container>
          <InputComponent {...this.props} />
        </Container>
      );
    }
  };
};

export default withContainer;
