import React, { Component } from 'react';
import './index.css';
import {Page1,Page2,Page3} from './page'

const Swiper = window.Swiper;
const $ = window.$;

class Index extends Component {
  constructor (props) {
    super(props)
    this.state ={
      stage1:true,
      stage2:true,
      stage3:true,
      stage4:true,
      swiper:undefined
    }
    this.goForm = this.goForm.bind(this)
  }
  goForm(){
    this.state.swiper.slideTo(6);
  }
  componentDidMount() {
    $('.up-arrow').animo({ animation: "fadeInUp", duration: 1, iterate:"infinite",keep: true });

    let that = this;
    window.setTimeout(function(){
      new Swiper('.swiper-container-v', {
        direction: 'vertical',
        updateOnImagesReady:true,
        onImagesReady: function(swiper){
          $('.laoding-back').fadeOut();
          $('#loader-container').fadeOut();
          // $('#page1-component').removeClass('laoding-back');
          window.swiperAnimateCache(swiper); //隐藏动画元素
          window.swiperAnimate(swiper); //初始化完成开始动画
        },
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
          that.setState({'swiper':swiper});
        },
        onSlideChangeEnd: function(swiper) {
          window.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
      });
    },50);
  }
  render() {

    return (
      <div className="swiper-container swiper-container-v">
        <div className="swiper-wrapper">
          {/* <Page1/>
          <Page2/> */}
          <Page3/>
        </div>
      </div>
    )
  }
}

export default Index
