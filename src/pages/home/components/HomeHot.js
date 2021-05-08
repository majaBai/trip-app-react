import React from 'react'
import './style/HomeHot.css'
import PropTypes from 'prop-types';

class HomeHot extends React.Component{
     static propTypes = {
         purchaseInfo: PropTypes.object
     }
    createLimitPurchase(){
        console.log('this.props.purchaseInfo', this.props.purchaseInfo)
        let limitPurchase = this.props.purchaseInfo.limitPurchase
        return(
            <div className="limit-purchase">
                <div className="limit-title">
                    <div className="limit-title-left">限时抢购</div>
                    <div className="limit-title-endtime">
                        距结束 
                        <span className="timer timer1">11</span>:<span className="timer">20</span>:<span className="timer">39</span>
                    </div>
                </div>
                <div className="limit-content">
                    <img className="content-img" src={limitPurchase.url} alt=""></img>
                    <p className="content-desc">{limitPurchase.desc}</p>
                </div>
                <div className="limit-footer">
                 <div className="footer-left">仅限{limitPurchase.count}份</div>
                 <div className="footer-right">
                    <span className="price-unit">￥</span> <span className="footer-price">{limitPurchase.price}</span><span className="price-desc">起</span>
                 </div>
                </div>
            </div>
        )
    }
    createOtherPurchase(){
        let otherPurchase = this.props.purchaseInfo.otherPurchase
        return(
            otherPurchase.map((item, index) =>{
                return(
                    // 动态绑定 class 和 静态class 一起使用
                    <div className={ ['otherPurchase-div', index === otherPurchase.length-1 ? null :'has-border'].join(' ')} key={item.id}>
                        <div className="otherPurchase-text">
                        <p className="otherPurchase-title">{item.title}</p>
                        <p className="otherPurchase-desc">{item.desc}</p>
                        </div>
                        <div className="otherPurchase-img-box">
                        <img className="otherPurchase-img" alt="" src={item.url}></img>
                        </div>
                    </div>
                )
            })
        )

    }
    render(){
        return(
            <div className='home-hot'>
                {this.createLimitPurchase()}
                <div className="otherPurchase">
                    {this.createOtherPurchase()}
                </div>
            </div>
        )
    }
}

export default HomeHot
