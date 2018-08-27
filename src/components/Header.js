import React from 'react';
import { Link } from 'react-router-dom';
import NavOption from './NavOption';


const navOptions = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Classes',
    link: '/classes',
  },
];

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">
          Shine
        </Link>
      </h1>
      <nav>
        {navOptions.map(option => (
          <div key={option.name}>
            <NavOption
              {...option}
            />
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
