import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {name: "Max", age: 38},
            {name: "Manu", age: 20},
            {name: "Stephanie", age: 26}
        ],
        showPeople: false
    };

    switchNameHandler = (i, name) => {
        console.log('%c i', 'border: 2px dashed blue', i);
        console.log('%c name', 'border: 2px dashed blue', name);

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

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: "Maxddd", age: 38},
                {name: event.target.value, age: 20},
                {name: "Stephaniddd e", age: 26}
            ]
        })
    };

    togglePeopleDiv = () => {
        //toggle .people divs
        const shows = this.state.showPeople;
        this.setState({showPeople: !shows})
    };

    render() {
        return (
            <div className="App">
                <h1>Burger App</h1>

                <p>
                    <button onClick={this.togglePeopleDiv}>Toggle</button>
                </p>

                {
                    this.state.showPeople ?
                        <div className="people">
                            <Person
                                name={this.state.persons[0].name}
                                age={this.state.persons[0].age}
                                switchName={(name) => this.switchNameHandler(0, name)} />
                            <Person
                                name={this.state.persons[1].name}
                                age={this.state.persons[1].age}
                                switchName={this.switchNameHandler.bind(this, 1, 'Lucas')}
                                changed={this.nameChangedHandler}>My hobbies: racing</Person>
                            <Person
                                name={this.state.persons[2].name}
                                switchName={this.switchNameHandler.bind(this, 2, 'Agnes')} />
                        </div> : null
                }
            </div>
        );
    }
}

export default App;
