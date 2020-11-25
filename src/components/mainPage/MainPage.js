import React from "react";
import "./main.scss";
import Header from "../header/Header";
import SearchBar from "../searchBar/SearchBar";
import Content from "../content/Content";
import Player from "../player/Player";
import SideBar from "../sideBar/SideBar"

let MainPage = () => {

  return (
    <div className="main-page">
      <SideBar />
      <div>
        <div className="main__header">
          <Header/>
          <SearchBar/>
        </div>
        <Content/>
        <Player/>
      </div>
    </div>
  );
};

export default MainPage;