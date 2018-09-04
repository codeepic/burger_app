import React from 'react';
import './Person.css';

export const person = (props) => {
    return (
        <div className="person">
            <p>I am a Person. My name is {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <p>
                <button onClick={props.switchName}>change name</button>
            </p>
        </div>
    )
};

export default person;



// export function Person(props) {
//     return <p>I am a Person</p>
// }