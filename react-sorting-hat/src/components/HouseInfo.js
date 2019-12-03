import React , { useEffect, useState } from 'react';
import houseData from '../houseData';

const HouseInfo = ( {house}) => {
    const [correctHouse, setCorrectHouse] = useState('G');
    const [correctHouseName, setCorrectHouseName] = useState('gryffindor');

    useEffect(() => {
        houseData.forEach(item => {
            if (item.id === house) {
                setCorrectHouse(item);
                setCorrectHouseName(item.name);
            }
        });
    }, [house]);
    
    return (
        <div className='houseInfo' style={{
            borderTop: `10px solid ${correctHouse.color1}`,
            borderLeft: `10px solid ${correctHouse.color2}`,
            borderRight: `10px solid ${correctHouse.color2}`, 
            borderBottom: `10px solid ${correctHouse.color1}`,
            }}>
            <h2>"{correctHouse.name}!!!!" shouts the hat.</h2>
            <h3>Here's more about {correctHouseName}:</h3>
            <p>{correctHouse.peopleType}</p>
            <p><span className='bold'>Founder:</span> {correctHouse.founder}</p>
            <p><span className='bold'>Headmaster:</span> {correctHouse.headmaster}</p>
            <p><span className='bold'>Element:</span> {correctHouse.element}</p>
            <p><span className='bold'>House Ghost:</span> {correctHouse.ghost}</p>
            <p><span className='bold'>Animal:</span> {correctHouse.animal}</p>
            <p>The <span className='bold'>common room</span> is located {correctHouse.commonRoomLocation}</p>
            <p>It is {correctHouse.commonRoomDescription}</p>
            <p>The entrance is {correctHouse.commonRoomEntrance}</p>  
        </div>
    )
}

export default HouseInfo;