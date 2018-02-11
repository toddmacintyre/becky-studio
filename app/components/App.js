import React from 'react';
import { Link } from 'react-router-dom'
import img from '../assets/images/react_logo_512x512.png';

const App = () => {
  return (
    <div>
      <h2 id="heading">Hello there...</h2>
      <img
        className="image"
        style={{ margin: '0.5em' }}
        height="40"
        width="40"
        src={img}
        alt="React Logo"
      />
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/classes">Classes</Link>
      </div>
    </div>
  );
};

export default App;
