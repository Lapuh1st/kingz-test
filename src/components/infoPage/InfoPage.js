import React from 'react';
import Header from '../header/Header';
import SearchBar from '../searchBar/SearchBar';
import InfoPageContent from './InfoPageContent';
import Player from '../player/Player';
import SideBar from '../sideBar/SideBar';
import './info-page.scss';

const InfoPage = () => {

  return (
    <div className="main-page info-page">
      <SideBar />
      <div>
        <div className="main__header">
          <Header/>
          <SearchBar/>
        </div>
        <InfoPageContent/>
        <Player/>
      </div>
    </div>
  );
};

export default InfoPage;