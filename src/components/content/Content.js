import React from 'react';
import mainImg from '../../images/main-image.png';
import featuredImage1 from '../../images/featured-image-1.png';
import featuredImage2 from '../../images/featured-image-2.png';
import './content.scss';


const Content = () => {

  return (
    <div className="content">
        <div className="content__main-image">
            <img src={mainImg} />
        </div>
        <div className="content__featured">
            <h2 className="featured__title">Featured</h2>
            <h5 className="featured__subtitle">this week</h5>
            <ul className="featured__list">
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
  );
};

export default Content;