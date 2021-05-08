import React, { Suspense }  from 'react'
import HomeHeader from './components/HomeHeader'
import HomeSlider from './components/HomeSlider'
import HomeCatalog from './components/HomeCatalog'
import HomeHot from './components/HomeHot'
import HomeWeekend from './components/HomeWeekend'
// 动态加载组件
const HomeGuess = React.lazy(() => import('./components/HomeGuess'));

class Home extends React.Component{
    constructor(){
        super()
        this.state={
            sliderImg:[],
            catalogImg:[],
            advertising:[],
            purchaseInfo:{
                limitPurchase:{},
                otherPurchase:[]
            },
            weekedImg:[]
        }
    }
    componentDidMount(){
        let imgInfo = [
            {
                url:"https://pic5.40017.cn/i/ori/SFVDIalLHy.jpg",
                id:"001"
            },
            {
                url:"https://pic5.40017.cn/02/000/6e/62/rBLkCVqwih-AWtVsAAEDYNuPT8s074_420x145_00.jpg",
                id:"002"
            },
            {
                url:"https://pic5.40017.cn/02/000/ab/5c/rBLkCFrYQiGAVGX8AAMK2OFqY_8075_420x145_00.jpg",
                id:"003"
            }
        ]
        let catalogInfo = [
            {
                url:"https://pic5.40017.cn/03/000/f7/f7/rBANB1ykgrGAHeQqAAAK6S6Ptyc182.png",
                id:"001",
                title:"海滨岛屿"
            },
            {
                url:"https://pic5.40017.cn/03/000/6b/b5/rB5oQFykgnaAX8MYAAALPO5ToOE755.png",
                id:"002",
                title:"城市观光"
            },
            {
                url:"https://pic5.40017.cn/03/000/f8/01/rBANB1ykguWAIMiGAAAMLCV__p4275.png",
                id:"003",
                title:"亲子游"
            },
            {
                url:"https://pic5.40017.cn/03/000/6b/ec/rB5oQFykg5SAFttgAAAMmtJBy1o096.png",
                id:"004",
                title:"温泉养身"
            },
        ]
        let advertisingInfo=[
            {
                url:"https://pic5.40017.cn/i/ori/NnlrqWinvi.jpg",
                id:"001"
            },
            {
                url:"https://pic5.40017.cn/i/ori/Oda2C2cnK0.jpg",
                id:"002"
            }
        ]
        let purchase={
            limitPurchase : {
                time: 12,
                desc:" 同程推荐+韶山+含环保车+花明楼+毛泽东纪念馆1日跟团同程推荐+韶山+含环保车+花明楼+毛泽东纪念馆1日跟团游同程推荐+韶山+含环保车+花明楼+毛泽东纪念馆1日跟团游 ",
                url:"http://pic4.40017.cn/shortTour/2016/05/23/11/anXByp_200x200_00.jpg",
                count:100,
                price:299
            },
            otherPurchase:[
                {
                    title:"快乐暑假",
                    desc:"亲子游行记",
                    url:"http://pic5.40017.cn/i/ori/X2qU1lrKc8_130x130_00.jpg",
                    id:"001"
                },
                {
                    title:"温泉爆款",
                    desc:"又到一年温泉季",
                    url:"http://pic5.40017.cn/03/000/a0/47/rB5oQFu-xSOAREI9ABBXqJrKjDg381_130x130_00.jpg",
                    id:"002"
                },
            ]
        }

        let weekedImgInfo=[
            {
                title:"深圳西冲",
                desc:"冲浪/徒步沙滩",
                url:"http://pic5.40017.cn/i/ori/SF1daBTsuQ_450x250_00.jpg.webp",
                id:"001"
            },
            {
                title:"桂林",
                desc:"桂林山水甲天下",
                url:"http://pic5.40017.cn/02/000/59/74/rBLkCVkyrKOAW_9gAAEAAPEX4T8922_450x250_00.jpg.webp",
                id:"002"
            },
            {
                title:"韶关丹霞山",
                desc:"世界自然遗产",
                url:"http://pic5.40017.cn/01/000/ad/d4/rBANC1pq0AeADTUjAANpe2OjYaY502_450x250_00.jpg.webp",
                id:"003"
            },
            {
                title:"连山梯田",
                desc:"中国十大梯田之一",
                url:"http://pic5.40017.cn/i/ori/RZmcp8c5kk_450x250_00.jpg.webp",
                id:"004"
            },
        ]
        
        this.setState({sliderImg:imgInfo})
        this.setState({catalogImg:catalogInfo})
        this.setState({advertising:advertisingInfo})
        // 更新嵌套的 state
        this.setState({
            purchaseInfo:{
                limitPurchase:{
                    ...this.state.purchaseInfo.limitPurchase,
                    ...purchase.limitPurchase
                },
                otherPurchase: purchase.otherPurchase
            }
        })
        this.setState({weekedImg:weekedImgInfo})

    }


    render(){
        console.log('this.purchaseInfo', this.state.purchaseInfo)
        return(
            <div>
                <HomeHeader />
                <HomeSlider sliderImg={this.state.sliderImg}/>
                <HomeCatalog catalogImg={this.state.catalogImg} advertising={this.state.advertising}/>
                <HomeHot purchaseInfo={this.state.purchaseInfo}/>
                <HomeWeekend weekedImg={this.state.weekedImg}/>
                {/* 使用 Suspense 来处理动态加载组件时的 loading 时间*/}
                <Suspense fallback={<div>Loading...</div>}>
                    <HomeGuess />
                </Suspense>
            </div>
        )
    }
}

export default Home
