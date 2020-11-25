import React from "react";
import "./header.scss";
import logo from "../../images/logo.svg";
import user from "../../images/user.png";
import settings from "../../images/settings.svg";
import bell from "../../images/bell.svg";

let MainPage = () => {

  return (
    <header>
      <div className="header__icon">
          <button className="header__button"></button>
      </div>
      <div className="header__logo">
        <img src={logo} />
      </div>
      <div className="header__user">
        <img className="header__user-icon" src={settings}/>
        <img className="header__user-icon" src={bell}/>
        <img src={user} />
      </div>
    </header>
    
  );
};

export default MainPage;