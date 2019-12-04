import React , { useEffect, useState } from 'react';
import houseData from '../houseData';
import CharacterBox from './CharacterBox';
import axios from 'axios';

const HouseInfo = ( {house}) => {
    console.log(house);
    const [correctHouse, setCorrectHouse] = useState({});
    const [correctHouseName, setCorrectHouseName] = useState('house');
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
        axios.get(`https://hp-api.herokuapp.com/api/characters/house/${correctHouseName}`)
            .then(response => {
                console.log(response);
                setCharacters(response.data);
            })
            .catch(err => console.log(err));
    }, [correctHouseName]);
    
    return (
        <div className='houseInfo' style={{
            borderTop: `2rem ridge ${correctHouse.color1}`,
            borderLeft: `2rem ridge ${correctHouse.color2}`,
            borderRight: `2rem ridge ${correctHouse.color2}`, 
            borderBottom: `2rem ridge ${correctHouse.color1}`,
            }}>
            <div className='houseText'>
                <h1>"{correctHouseName}!!!!" shouts the hat.</h1>
                <h2>More About {correctHouseName[0].toUpperCase() + correctHouseName.slice(1)}</h2>
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

            <div>
                <h2>Fellow {correctHouseName[0].toUpperCase() + correctHouseName.slice(1)}s</h2>
                <div className='cardsBox'>
                    {characters.map(character => {
                        return <CharacterBox key={character.name} character={character} correctHouse={correctHouse} />
                    })}
                </div>
            </div>  
        </div>
    )
}

export default HouseInfo;