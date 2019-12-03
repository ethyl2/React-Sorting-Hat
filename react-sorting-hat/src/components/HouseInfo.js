import React from 'react';
import houseData from '../houseData';

const HouseInfo = ( {house}) => {
    let correctHouse = {};
    houseData.forEach(item => {
        if (item.id === house) {
            correctHouse = item;
        }
    });
    return (
        <div className='houseInfo' style={{
            borderTop: `10px solid ${correctHouse.color1}`,
            borderLeft: `10px solid ${correctHouse.color2}`,
            borderRight: `10px solid ${correctHouse.color2}`, 
            borderBottom: `10px solid ${correctHouse.color1}`,
            }}>
            <h2>"{correctHouse.name}!!!!" shouts the hat.</h2>
            <h3>Here's more about {correctHouse.name}:</h3>
            <p>{correctHouse.peopleType}</p>
            <p>Founder: {correctHouse.founder}</p>
            <p>Headmaster: {correctHouse.headmaster}</p>
            <p>Element: {correctHouse.element}</p>
            <p>House Ghost: {correctHouse.ghost}</p>
            <p>Animal: {correctHouse.animal}</p>
            <p>The common room is located {correctHouse.commonRoomLocation}</p>
            <p>It is {correctHouse.commonRoomDescription}</p>
            <p>The entrance is {correctHouse.commonRoomEntrance}</p>  
        </div>
    )
}

export default HouseInfo;