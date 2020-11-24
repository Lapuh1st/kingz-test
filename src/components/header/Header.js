import React from "react";
import "./header.scss";
import logo from "../../images/logo.png";
import user from "../../images/user.png";

let MainPage = () => {

  return (
    <header>
      <div>Burger here</div>
      <div>
        <img src={logo} />
      </div>
      <div>
        <img src={user} />
      </div>
    </header>
  );
};

export default MainPage;