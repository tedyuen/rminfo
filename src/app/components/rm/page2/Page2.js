import React, { Component } from 'react';
import '../index.css';
import './page2.css'
import img1 from './images/1.jpg'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'
import img7 from './images/7.png'
import upArrow from '../images/up_arrow.png'

class Page2 extends Component {

  render() {

    return (
      <div id="page2-component" data-hash="page2" className="swiper-slide img img-1">
        <img src={img1} alt="img1"
              className="img-page2-1 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 0 from fadeInDown use swing during 800"/> 
        <img src={img3} alt="img3"
              className="img-page2-3 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 200 from fadeInDown use swing during 800"/> 
        
        <img src={img4} alt="img4"
              className="img-page2-4 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 400 from fadeInLeft use swing during 800"/> 
        <img src={img5} alt="img5"
              className="img-page2-5 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 500 from fadeInRight use swing during 800"/> 
        
        <img src={img6} alt="img6"
              className="img-page2-6 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 600 from fadeInLeft use swing during 800"/> 
        <img src={img7} alt="img7"
              className="img-page2-7 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 700 from fadeInRight use swing during 800"/> 

        <img src={img2} alt="img2"
              className="img-page2-2 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 800 from fadeInUp use swing during 800"/> 

        <img src={upArrow} alt="upArrow" className="up-arrow"/>
      </div>
    )
  }
}

export default Page2;
