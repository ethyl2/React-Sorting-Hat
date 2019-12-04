import React from 'react';
import { Link } from 'react-router-dom';
import candle from '../images/candle.svg';

const Home = () => {
    return(
        <div>
            <div className='imgContainer icon'>
                <img src={candle} alt='candle' />
            </div>
            <div className='imgContainer icon'>
                <img src={candle} alt='candle' />
            </div>
            <div className='imgContainer icon'>
                <img src={candle} alt='candle' />
            </div>
            <p className="App-intro">
            To get started, click the button, if you are ready!
            </p>
            <Link to='/quiz'>Put on the Hat</Link>
            <br />
            <div className='imgContainer icon'>
                <img src={candle} alt='candle' />
            </div>
            <div className='imgContainer icon'>
                <img src={candle} alt='candle' />
            </div>
            <div className='imgContainer icon'>
                <img src={candle} alt='candle' />
            </div>
        </div>
    )
}

export default Home;