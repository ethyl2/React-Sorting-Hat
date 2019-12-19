import React from 'react';
import candle from '../images/candle.svg';
import UIfx from 'uifx';
import helloAudio from '../audio/hello.wav';

const Home = props => {

    const hello = new UIfx (
        helloAudio, 
        {volume: 0.5,
        throttleMs: 100}
    )

    const handleClick = () => {
        hello.play();
        props.history.push('/quiz');
    }

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
            <button onClick={handleClick}>Put on the Hat</button>
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