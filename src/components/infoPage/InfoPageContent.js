import React from "react";
import infoImg from "../../images/info-content-image.png";
import infoListImg1 from "../../images/info-list-image.png";
import infoListImg2 from "../../images/info-list-image-2.png";
import union from "../../images/union.svg";
import arrow from "../../images/arrow.svg";
import featuredImage1 from "../../images/featured-image-1.png";
import featuredImage2 from "../../images/featured-image-2.png";

let Content = () => {

  return (
    <div className="info-content">
        <div className="info-content__section info-content__section--title">
            <h1 className="info-content__title">
                The Prodigy
            </h1>
            <div className="content__main-image">
                <img src={infoImg} />
            </div>
            <div className="info-content__albums">
                <div className="info-content__container">
                    <h2 className="info-content__subtitle">
                        Albums
                        <img className="info-content__arrow info-content__arrow--rotate" src={arrow}/>
                        <img className="info-content__arrow" src={arrow}/>
                    </h2>
                    <img src={union} />
                </div>
                <ul className="featured__list featured__list--albums">
                    <li className="featured__item">
                        <img src={featuredImage1}/>
                        <h3>Ignored</h3>
                        <h4>Jazz B</h4>
                    </li>
                    <li className="featured__item">
                        <img src={featuredImage2}/>
                        <h3>NAO</h3>
                        <h4>Selena</h4>
                    </li>
                    <li className="featured__item">
                        <img src={featuredImage1}/>
                        <h3>Orion</h3>
                        <h4>Chuck</h4>
                    </li>
                    <li className="featured__item">
                        <img src={featuredImage2}/>
                        <h3>Orion</h3>
                        <h4>Chuck</h4>
                    </li>
                    <li className="featured__item">
                        <img src={featuredImage1}/>
                        <h3>Orion</h3>
                        <h4>Chuck</h4>
                    </li>
                    <li className="featured__item">
                        <img src={featuredImage2}/>
                        <h3>Orion</h3>
                        <h4>Chuck</h4>
                    </li>
                </ul>
            </div>
        </div>
        <div className="info-content__section info-content__section--sub">
            <div className="info-content__container">
                <h2 className="info-content__subtitle">
                    Most Loved Tracks
                </h2>
                <img src={union} />
            </div>
            <ul className="info-content__list">
                <li className="info-content__item">
                    <img src={infoListImg1}/>
                    <div className="info-content__list-text">
                        <h3>Ignored</h3>
                        <h4>Jazz B</h4>
                    </div>
                </li>
                <li className="info-content__item">
                    <img src={infoListImg2}/>
                    <div className="info-content__list-text">
                        <h3>Ignored</h3>
                        <h4>Jazz B</h4>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Content;