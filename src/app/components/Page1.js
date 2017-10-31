import React, { Component } from 'react';
import './index.css';
import '../style/page1.css'
import logoImg from '../images/page1/logo.png'
import img2 from '../images/page1/2.png'
import img3 from '../images/page1/3.png'
import upArrow from '../images/up_arrow.png'

class Page1 extends Component {

  render() {

    return (
      <div id="page1-component" data-hash="page1" className="swiper-slide img img-1">
        <img src={logoImg} alt="logoimg" width="100px" className="img-page1-log"/>
        <img src={img2} alt="img2" className="img-page1-2"/>
        <img src={img3} alt="img3" className="img-page1-3 ani" style={{visibility:'hidden'}} data-slide-in="at 0 from fadeInUp use swing during 800"/>
        <div className="laoding-back"></div>
        <div id="loader-container" >
          <p id="loadingText"></p>
        </div>
        <img src={upArrow} alt="upArrow" className="up-arrow"/>
      </div>
    )
  }
}

export default Page1;
