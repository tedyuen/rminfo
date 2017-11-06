import React, { Component } from 'react';
import '../index.css';
import './page16.css'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.jpg'

import upArrow from '../images/up_arrow.png'

class Page16 extends Component {

  render() {

    return (
      <div id="page16-component" data-hash="page16" className="swiper-slide img img-16">
        <img src={img2} alt="img2"
              className="img-page16-2 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 0 from fadeInDown use swing during 800"/>  
        <img src={img3} alt="img3"
              className="img-page16-3 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 200 from fadeInLeft use swing during 800"/> 
        
        <img src={img4} alt="img4"
              className="img-page16-4 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 300 from flipInY use swing during 800"/> 
     
        <img src={upArrow} alt="upArrow" className="up-arrow"/>
      </div>
    )
  }
}

export default Page16;
