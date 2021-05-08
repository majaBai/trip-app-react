import React from 'react'
import PropTypes from 'prop-types';
import './style/HomeCatalog.css'
  
class HomeCatalog extends React.Component{
    static propTypes = {
        catalogImg: PropTypes.array,
        advertising:PropTypes.array,
    }
    createCatalog(){
        let {catalogImg} = this.props
        return(
            catalogImg.map(item =>{
                return(
                    <li className="catalog-li" key={item.id}>
                        <img className="catalog-img" alt="" src={item.url}></img>
                        <p>{item.title}</p>
                    </li>
                )
            })
        )
    }
    createAdvertising(){
        let {advertising} = this.props
        return(
            advertising.map(item =>{
                return(
                    <li className="ads-li" key={item.id}>
                        <img className="ads-img" alt="" src={item.url}></img>
                    </li>
                )
            })
        )
    }
    render(){
        return(
            <div className='home-catalog'>
                <ul className="catalog-ul">
                  {this.createCatalog()}
                </ul>
                <ul className="ads-box">
                    {this.createAdvertising()}
                </ul>
            </div>
        )
    }
}

export default HomeCatalog
