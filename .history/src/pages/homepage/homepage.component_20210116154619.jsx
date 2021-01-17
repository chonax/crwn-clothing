import React from 'react';
import MenuItem from '../../components/menu-item/menu-item.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  </div>
);

export default HomePage;