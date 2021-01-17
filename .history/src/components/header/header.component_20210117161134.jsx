import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponene as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link to="/">
      <Logo />
    </Link>
  </div>
)