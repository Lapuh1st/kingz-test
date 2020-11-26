import React from 'react';
import { Link } from 'react-router-dom';
import sidebar from '../../images/sidebar.jpg';
import './sideBar.scss';

const SideBar = () => {

  return (
    <aside className="sidebar show">
      <Link to="/">
        <img src={sidebar}/>
      </Link>
    </aside>

  );
};

export default SideBar;