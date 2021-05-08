import React from 'react'
import './style/HomeGuess.css'


class HomeGuess extends React.Component{

    createTitle(){
        return(
            <div className="guess-title-box">
                <div className="guess-title">
                    猜你喜欢
                </div>
            </div>
        )
    }
    render(){
        return(
            <div className='home-guess'>
             {this.createTitle()}
            </div>
        )
    }
}

export default HomeGuess
