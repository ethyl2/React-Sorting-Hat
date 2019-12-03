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
        axios.get(`https://hp-api.herokuapp.com/api/characters/house/${correctHouseName}`)
            .then(response => {
                console.log(response);
                setCharacters(response.data);
            })
            .catch(err => console.log(err));
    }, [correctHouseName]);

    const formatDate = date => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const dateParts = date.split("-");
        // month is 0-based, that's why we need dataParts[1] - 1
        const d = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
        const curr_date = d.getDate();
        const curr_month = d.getMonth();
        const curr_year = d.getFullYear();
        return (curr_date + " " + monthNames[curr_month] + " " + curr_year);
    }
    
    return (
        <div className='houseInfo' style={{
            borderTop: `10px solid ${correctHouse.color1}`,
            borderLeft: `10px solid ${correctHouse.color2}`,
            borderRight: `10px solid ${correctHouse.color2}`, 
            borderBottom: `10px solid ${correctHouse.color1}`,
            }}>
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

            <div>
                <h2>Fellow {correctHouseName[0].toUpperCase() + correctHouseName.slice(1)}s</h2>
                <div className='cardsBox'>
                    {characters.map(character => {
                        return (
                            <div key={character.name} className='characterBox'>
                                <h3>{character.name}</h3>
                                <p><span className='bold'>Birthday: </span>{formatDate(character.dateOfBirth)}</p>
                                {character.patronus? <p><span className='bold'>Patronus: </span>{character.patronus}</p> : null}
                                <div className='imgContainer'>
                                    <img src={character.image} alt='bio pic' />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>  
        </div>
    )
}

export default HouseInfo;