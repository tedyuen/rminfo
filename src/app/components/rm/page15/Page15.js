import React, { Component } from 'react';
import '../index.css';
import './page15.css'
import img2 from './images/2.png'

import upArrow from '../images/up_arrow.png'

class Page15 extends Component {

  render() {

    return (
      <div id="page15-component" data-hash="page15" className="swiper-slide img img-15">
        <img src={img2} alt="img1"
              className="img-page15-1 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 0 from flipInY use swing during 800"/>  
       
        <img src={upArrow} alt="upArrow" className="up-arrow"/>
      </div>
    )
  }
}

export default Page15;
