import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app'),
  );
};
render();
