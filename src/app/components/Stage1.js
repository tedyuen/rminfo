import React, { Component } from 'react';
import {Page3, Page4} from './page'
const Swiper = window.Swiper;
class Stage1 extends Component {
  constructor (props) {
    super(props)
    this.state ={
      swiperV:undefined,
    }
  }
  componentDidMount() {
    let that = this;
    window.setTimeout(function(){
      new Swiper('.swiper-container-stage1', {
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
          window.swiperAnimateCache2(swiper); //隐藏动画元素
          window.swiperAnimate2(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper) {
          window.swiperAnimate2(swiper); //每个slide切换结束时也运行当前slide动画
          // window.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
          that.setState({'swiperV':swiper});
        }
      },100);
    });

  }
  componentWillReceiveProps(nextProps) {
    if(this.props.flag !== nextProps.flag && this.state.swiperV) {
      this.state.swiperV.slideTo(0);
    }

  }
  render() {

    return (
      <div className="swiper-slide">
        <div className="swiper-container swiper-container-stage1">
          <div className="swiper-wrapper">
            <Page3 goForm={this.props.goForm}/>
            <Page4 goForm={this.props.goForm}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Stage1;
