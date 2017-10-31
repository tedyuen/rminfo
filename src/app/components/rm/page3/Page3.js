import React, { Component } from 'react';
import '../index.css';
import './page3.css'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'

import upArrow from '../images/up_arrow.png'

class Page3 extends Component {

  render() {

    return (
      <div id="page3-component" data-hash="page3" className="swiper-slide img img-3">
        <img src={img2} alt="img2"
              className="img-page3-2 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 0 from fadeInLeft use swing during 800"/>  
        <img src={img3} alt="img3"
              className="img-page3-3 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 200 from fadeInDown use swing during 800"/> 
        
        <img src={img4} alt="img4"
              className="img-page3-4 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 400 from fadeInDown use swing during 800"/> 
        <img src={img5} alt="img5"
              className="img-page3-5 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 700 from fadeInDown use swing during 800"/> 

        <img src={upArrow} alt="upArrow" className="up-arrow"/>
      </div>
    )
  }
}

export default Page3;
