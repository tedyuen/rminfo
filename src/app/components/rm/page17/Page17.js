import React, { Component } from 'react';
import '../index.css';
import './page17.css'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'

import upArrow from '../images/up_arrow.png'

class Page14 extends Component {

  render() {

    return (
      <div id="page17-component" data-hash="page17" className="swiper-slide img img-17">
        <img src={img1} alt="img1"
              className="img-page17-1 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 0 from fadeInDown use swing during 800"/>  

        <img src={img2} alt="img2"
              className="img-page17-2 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 0 from fadeInUpHalf use swing during 800"/>  

        <img src={img3} alt="img3"
              className="img-page17-3 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 100 from fadeInLeft use swing during 800"/> 

        <img src={img4} alt="img4"
              className="img-page17-4 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 200 from fadeInLeft use swing during 800"/> 

        <img src={img5} alt="img5"
              className="img-page17-5 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 300 from fadeInLeft use swing during 800"/> 
       
        <img src={upArrow} alt="upArrow" className="up-arrow"/>
      </div>
    )
  }
}

export default Page14;
