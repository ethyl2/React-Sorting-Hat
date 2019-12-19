import React from 'react';

const CharacterBox = (props) => {
    const character = props.character;
    const correctHouse = props.correctHouse;

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
        <div key={character.name} className='characterBox' style={{backgroundImage: `linear-gradient(${correctHouse.color2}, ${correctHouse.color1})`}}>
            <h3>{character.name}</h3>
            {character.dateOfBirth? <p><span className='bold'>Birthday: </span>{formatDate(character.dateOfBirth)}</p> : <p><span className='bold'>Year of Birth: </span>{character.yearOfBirth}</p>}
            {character.patronus? <p><span className='bold'>Patronus: </span>{character.patronus}</p> : null}
            <div className='imgContainer'>
                <img src={character.image} alt='bio pic' />
            </div>
        </div>
    )
}

export default CharacterBox;