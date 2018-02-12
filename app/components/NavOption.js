import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const NavOption = ({ name, link }) => {
  return (
    <div>
      <Link to={link}>{name}</Link>
    </div>
  );
};

NavOption.propTypes = propTypes;
export default NavOption;
