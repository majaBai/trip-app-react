import React from 'react'
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination} from 'swiper';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "./style/HomeSlider.css"

SwiperCore.use([Pagination]);

class HomeSlider extends React.Component{
    static propTypes = {
        sliderImg: PropTypes.array
    }

    createSlide(){
        let sliderImg = this.props.sliderImg
        return (
            sliderImg.map(item => {
            return (
            <SwiperSlide key={item.id}>
                <img className="swiper-img" src={item.url} alt=""></img>
            </SwiperSlide>)
           })
        )
    }
    
    render(){
        
        return(
            <Swiper pagination={true}
              className="header-swiper">
               {this.createSlide()}
            </Swiper>
        )
    }
}

export default HomeSlider
