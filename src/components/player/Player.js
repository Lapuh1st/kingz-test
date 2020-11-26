import React from 'react';
import playerImg from '../../images/player-image.png';
import './player.scss';

const Player = () => {

  return (
    <div className="player">
        <img className="player__image" src={playerImg}/>
        <div className="player__content">
            <div className="player__text">
                <h3>
                    Say so
                </h3>
                <h5>
                    Doja cat
                </h5>
            </div>
            <div className="player__icons">
                <div className="player__pause"></div>
                <div className="player__next"></div>
            </div>
        </div>
    </div>
  );
};

export default Player;