import React , { useEffect, useState } from 'react';
import houseData from '../houseData';
import axios from 'axios';

const HouseInfo = ( {house}) => {
    const [correctHouse, setCorrectHouse] = useState('G');
    const [correctHouseName, setCorrectHouseName] = useState('gryffindor');
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        houseData.forEach(item => {
            if (item.id === house) {
                setCorrectHouse(item);
                setCorrectHouseName(item.name);
            }
        });
    }, [house]);

    useEffect(()=> {
        axios.get(`https://hp-api.herokuapp.com/api/characters/house/gryffindor`)
            .then(response => {
                console.log(response);
                setCharacters(response.data);
            })
            .catch(err => console.log(err));
    }, [correctHouse]);
    
    return (
        <div className='houseInfo' style={{
            borderTop: `10px solid ${correctHouse.color1}`,
            borderLeft: `10px solid ${correctHouse.color2}`,
            borderRight: `10px solid ${correctHouse.color2}`, 
            borderBottom: `10px solid ${correctHouse.color1}`,
            }}>
            <h1>"{correctHouse.name}!!!!" shouts the hat.</h1>
            <h2>More About {correctHouseName}</h2>
            <p>{correctHouse.peopleType}</p>
            <p><span className='bold'>Founder:</span> {correctHouse.founder}</p>
            <p><span className='bold'>Headmaster:</span> {correctHouse.headmaster}</p>
            <p><span className='bold'>Element:</span> {correctHouse.element}</p>
            <p><span className='bold'>House Ghost:</span> {correctHouse.ghost}</p>
            <p><span className='bold'>Animal:</span> {correctHouse.animal}</p>
            <p>The <span className='bold'>common room</span> is located {correctHouse.commonRoomLocation}</p>
            <p>It is {correctHouse.commonRoomDescription}</p>
            <p>The entrance is {correctHouse.commonRoomEntrance}</p>

            <div>
                <h2>Fellow {correctHouseName}s</h2>
                {characters.map(character => {
                    return (
                        <div key={character.name}>
                            <h3>{character.name}</h3>
                            <img src={character.image} alt='bio pic' />
                        </div>
                    )
                })}
            </div>  
        </div>
    )
}

export default HouseInfo;