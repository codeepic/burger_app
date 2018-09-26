import React, {Component} from 'react';
import './Person.css';
import Radium from "radium";
import PropTypes from "prop-types";

export class Person extends Component{
    style = {
        border: '3px dashed purple',
        transition: 'all .2s ease-in',

        ':hover': {
            backgroundColor: 'pink'
        },

        '@media (min-width: 500px)': {
            width: '450px',
            color: 'orange'
        }
    };

    render() {
        return (
            <div className="person" style={this.style}>
                <p>
                    I am a Person. My name is <em>{this.props.name}</em> and I am <em>{this.props.age}</em> years old.
                </p>
                <p>{this.props.children}</p>
                <p><input type="text"
                          onChange={(event) => this.props.changed(event.target.value)}
                          value={this.props.name} /></p>
                <p>
                    <button onClick={this.props.delete}>Delete</button>
                </p>
            </div>
        )
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

// export default person;
export default Radium(Person);



// export function Person(props) {
//     return <p>I am a Person</p>
// }
