import React from 'react';
import './Person.css';
//{/*<div className="person" onClick={props.switchName}>*/}
{/*<div className="person" onClick={() => props.switchName('sjsjsjsjjs')}>*/}
export const person = (props) => {
    return (
        <div className="person" >
            <p>
                I am a Person. My name is <em>{props.name}</em> and I am <em>{props.age}</em> years old.
            </p>
            <p>{props.children}</p>
            {/*<p><input type="text" onChange={props.changed} value={props.name} /></p>*/}
            <p><input type="text" onChange={(event) => props.changed(event.target.value)} value={props.name} /></p>
            <p>
                <button onClick={props.delete}>Delete</button>
            </p>
        </div>
    )
};

export default person;



// export function Person(props) {
//     return <p>I am a Person</p>
// }
