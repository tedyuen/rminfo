import React, { Component } from 'react';
import '../index.css';
import './page4.css'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'
import img7 from './images/7.png'
import img8 from './images/8.png'
import img9 from './images/9.png'
import img10 from './images/10.png'
import img11 from './images/11.png'
import img12 from './images/12.png'
import img13 from './images/13.png'
import img14 from './images/14.png'
import img15 from './images/15.png'
import img16 from './images/16.png'
import img17 from './images/17.png'
import img18 from './images/18.png'

import upArrow from '../images/up_arrow.png'

class Page4 extends Component {

  render() {

    return (
      <div id="page4-component" data-hash="page4" className="swiper-slide img img-4">
        <img src={img2} alt="img2"
              className="img-page4-2 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 0 from fadeInDown use swing during 800"/>  
        <img src={img3} alt="img3"
              className="img-page4-3 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 200 from fadeInDown use swing during 800"/> 
        
        <img src={img4} alt="img4"
              className="img-page4-4 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 0 from fadeInUp use swing during 800"/> 

        <img src={img5} alt="img5"
              className="img-page4-5 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 600 from fadeInLeft use swing during 800"/> 
        <img src={img6} alt="img6"
              className="img-page4-6 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 800 from fadeInLeft use swing during 800"/> 

        <img src={img7} alt="img7"
              className="img-page4-7 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 700 from fadeInLeft use swing during 800"/> 
        <img src={img8} alt="img8"
              className="img-page4-8 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 900 from fadeInLeft use swing during 800"/> 

        <img src={img9} alt="img9"
              className="img-page4-9 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 800 from fadeInLeft use swing during 800"/> 
        <img src={img10} alt="img10"
              className="img-page4-10 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 1000 from fadeInLeft use swing during 800"/> 

        <img src={img11} alt="img11"
              className="img-page4-11 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 900 from fadeInLeft use swing during 800"/> 
        <img src={img12} alt="img12"
              className="img-page4-12 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 1100 from fadeInLeft use swing during 800"/> 

        <img src={img13} alt="img13"
              className="img-page4-13 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 1000 from fadeInLeft use swing during 800"/> 
        <img src={img14} alt="img14"
              className="img-page4-14 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 1200 from fadeInLeft use swing during 800"/> 

        <img src={img15} alt="img15"
              className="img-page4-15 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 1100 from fadeInLeft use swing during 800"/> 
        <img src={img16} alt="img16"
              className="img-page4-16 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 1300 from fadeInLeft use swing during 800"/> 

        <img src={img17} alt="img17"
              className="img-page4-17 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 1200 from fadeInLeft use swing during 800"/> 
        <img src={img18} alt="img18"
              className="img-page4-18 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 1400 from fadeInLeft use swing during 800"/> 

              


        <img src={upArrow} alt="upArrow" className="up-arrow"/>
      </div>
    )
  }
}

export default Page4;
