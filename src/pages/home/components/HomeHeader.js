import React from 'react'
import './style/HomeHeader.css'
import {
    LeftOutlined,
    DownOutlined,
    SearchOutlined
  } from '@ant-design/icons';

class HomeHeader extends React.Component{
    render(){
        return(
            <div className='home-header'>
             <div className='header-back'> <LeftOutlined /> </div>
             <div className='header-input'><SearchOutlined />目的地/关键词</div>
             <div className='headerCity'>深圳市<DownOutlined /></div>
            </div>
        )
    }
}

export default HomeHeader
