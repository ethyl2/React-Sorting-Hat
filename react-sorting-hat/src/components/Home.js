import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <p className="App-intro">
            To get started, click the button, if you are ready!
            </p>
            <Link to='/quiz'>Put on the Hat</Link>
        </div>
    )
}

export default Home;