import React from "react";
import "./sideBar.scss";
import sidebar from "../../images/sidebar.jpg";

let SideBar = () => {

  return (
    <aside className="sidebar show">
        <img src={sidebar}/>
    </aside>
    
  );
};

export default SideBar;