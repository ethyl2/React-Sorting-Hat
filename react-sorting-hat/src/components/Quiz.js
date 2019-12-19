import React from 'react';
import questions from '../questions.js';
import UIfx from 'uifx';
import magicAudio from '../audio/magic.mp3';

const Quiz = props => {
    
    const magic = new UIfx (
        magicAudio, 
        {volume: 0.5,
        throttleMs: 100}
    )

    const handleSubmit = e => {
        e.preventDefault();
        console.log('in handleSubmit');
        //console.log(e.target.question0.value);
        let houseTotals = {'G': 0, 'R': 0, 'H': 0, 'S': 0};
        for (let i=0; i<e.target.length -1; i++) {
            let questionNum = `question${i}`;
            //console.log(e.target[questionNum].value);
            houseTotals[e.target[questionNum].value]++;
        }
        console.log(houseTotals);
        let winningHouse = 'G';
        let winningTotal = 0;
        for (const[key, value] of Object.entries(houseTotals)) {
            if (value > winningTotal) {
                winningTotal = value;
                winningHouse = key;
            }
            if (value === winningTotal && winningHouse !== key) {
                winningHouse = [winningHouse, key];
            }
        }
        console.log(winningHouse);
        //In the event of a tie, simply randomize and select a house from the two options.
        if (winningHouse.length > 1) {
            let randomHouse = Math.floor(Math.random() * winningHouse.length);
            winningHouse = winningHouse[randomHouse];
        }
        console.log(winningHouse);
        magic.play();
        props.setHouse(winningHouse);
        props.history.push('/house/');

    }

    return (
        <div>
        <h2>The Sorting Hat Wants to Know:</h2>
        <form onSubmit={handleSubmit}>
            {questions.map((item, index) => {
                return (
                    <div  key={index}>
                        <label htmlFor={`question${index}`}>{item.question}</label><br />
                        <select required id={`question${index}`} name={`question${index}`}>
                            <option value='' disabled>Choose one:</option>
                            <option value={item.options.optionA.house}>{item.options.optionA.text}</option>
                            <option value={item.options.optionB.house}>{item.options.optionB.text}</option>
                            <option value={item.options.optionC.house}>{item.options.optionC.text}</option>
                            <option value={item.options.optionD.house}>{item.options.optionD.text}</option>
                        </select>
                    </div>
                )
            })}
            <button type='submit'>Submit</button>
        </form>
        </div>
    )
}

export default Quiz;