import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {name: "Max", age: 38},
            {name: "Manu", age: 20},
            {name: "Stephanie", age: 26}
        ]
    };

    switchNameHandler = (i, name) => {
        this.setState(prevState => {
            return {
                persons: [
                    ...prevState.persons.slice(0,i),
                    {...prevState.persons[i], name},
                    ...prevState.persons.slice(i+1)
                ]
            };
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Burger App</h1>

                <p>
                    <button onClick={this.switchNameHandler.bind(this, 0, 'Mariola')}>Switch Name</button>
                </p>

                <div className="people">
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        switchName={this.switchNameHandler.bind(this, 0, 'Marko')} />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        switchName={this.switchNameHandler.bind(this, 1, 'Lucas')}>My hobbies: racing</Person>
                    <Person
                        name={this.state.persons[2].name}
                        switchName={this.switchNameHandler.bind(this, 2, 'Agnes')} />
                </div>
            </div>
        );
    }
}

export default App;
