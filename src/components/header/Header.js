import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import settings from '../../images/settings.svg';
import bell from '../../images/bell.svg';
import './header.scss';

const MainPage = () => {

  return (
    <header>
      <div className="header__icon">
          <button className="header__button"></button>
      </div>
      <div className="header__logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="header__user">
        <img className="header__user-icon" src={settings}/>
        <img className="header__user-icon" src={bell}/>

      </div>
    </header>

  );
};

export default MainPage;