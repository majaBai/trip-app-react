import React from 'react'
import './style/HomeWeekend.css'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "./style/HomeSlider.css"


class HomeWeekend extends React.Component{
    static propType = {
        weekedImg: PropTypes.array
    }
    slideConfig = {
        // tag: 'section',
        // wrapperTag: 'ul',
        spaceBetween: 50, // 两个slide的间距
        slidesPerView: 3,
        // loop: true,
        // speed: 800,
        // effect: 'coverflow',
        // autoplay: {delay: 6000},
        // pagination: { clickable: true },
        // scrollbar:{ draggable: true },
        // onSwiper: (swiper) => console.log(swiper),
        // onSlideChange: () => console.log('slide change')
      }
    createTitle(){
        return(
            <div className="weekend-title">
                <div >//////<span className="title">周末出游</span>//////</div>
                <div className="weekend-title-desc">致力推荐超完美套餐</div>
            </div>
        )
    }

    createSlider(){
        let weekendImg = this.props.weekedImg
        return(
            weekendImg.map(item =>{
                return (
                    <SwiperSlide key={item.id} className="weekend-swiper-slide">
                        <div className="slider-box">
                            <div className="slider-img-box">
                                <img alt="" src={item.url} className="slider-img"></img>
                            </div>
                            <div className="slider-text">
                                <p className="slider-title">{item.title}</p>
                                <p className="slider-desc">{item.desc}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })
        )
    }
    render(){
        return(
            <div className='home-weekend'>
              {this.createTitle()}
              <Swiper className="weekend-swiper" {...this.slideConfig}>
               {this.createSlider()}
              </Swiper>
            </div>
        )
    }
}

export default HomeWeekend
