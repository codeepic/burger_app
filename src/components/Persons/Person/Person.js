import React from 'react';
import './Person.css';
import Radium from "radium";
//{/*<div className="person" onClick={props.switchName}>*/}
{/*<div className="person" onClick={() => props.switchName('sjsjsjsjjs')}>*/}
export const person = (props) => {
    const style = {
        border: '3px dashed purple',
        transition: 'all .2s ease-in',

        ':hover': {
            backgroundColor: 'pink'
        },

        '@media (min-width: 500px)': {
            width: '450px',
            color: 'orange'
        }
    }

    return (
        <div className="person" style={style}>
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

// export default person;
export default Radium(person);



// export function Person(props) {
//     return <p>I am a Person</p>
// }
