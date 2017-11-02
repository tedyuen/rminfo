import React, { Component } from 'react';
import '../index.css';
import './page10.css'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'
import img7 from './images/7.png'

import upArrow from '../images/up_arrow.png'

class Page9 extends Component {

  render() {

    return (
      <div id="page10-component" data-hash="page9" className="swiper-slide img img-9">
        <img src={img2} alt="img2"
              className="img-page9-2 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 0 from fadeInDown use swing during 800"/>  
        <img src={img3} alt="img3"
              className="img-page9-3 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 200 from fadeInDown use swing during 800"/> 
        
        <img src={img4} alt="img4"
              className="img-page9-4 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 0 from fadeInUp use swing during 800"/> 

        <img src={img7} alt="img7"
              className="img-page9-7 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 800 from fadeInRight use swing during 800"/> 
               
        <img src={img8} alt="img8"
              className="img-page9-8 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 800 from fadeInRight use swing during 800"/> 

        <img src={img5} alt="img5"
              className="img-page9-5 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 400 from fadeInLeft use swing during 800"/>

        <img src={img6} alt="img6"
              className="img-page9-6 ani"
              style={{visibility:'hidden'}}
              data-slide-in="at 600 from fadeInRight use swing during 800"/> 


        <img src={upArrow} alt="upArrow" className="up-arrow"/>
      </div>
    )
  }
}

export default Page9;
