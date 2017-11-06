import React, { Component } from 'react';
import '../index.css';
import './page14.css'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'

import upArrow from '../images/up_arrow.png'

class Page14 extends Component {

  render() {

    return (
      <div id="page14-component" data-hash="page14" className="swiper-slide img img-14">
        <img src={img1} alt="img1"
              className="img-page14-1 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 0 from fadeInDown use swing during 800"/>  

        <img src={img2} alt="img2"
              className="img-page14-2 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 0 from fadeInUp use swing during 800"/>  

        <img src={img3} alt="img3"
              className="img-page14-3 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 100 from fadeInLeft use swing during 800"/> 
       
        <img src={upArrow} alt="upArrow" className="up-arrow"/>
      </div>
    )
  }
}

export default Page14;
