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
    }

    switch2ndPersonNameHandler = () => {
        console.log('clclllcc', this.state)

        // this.setState({
        //     persons: [
        //         {name: 'Edwin', age: 90},
        //         {name: 'Edwin 2', age: 91},
        //         {name: 'Edwin 3', age: 89}
        //     ]
        // })


        // this.setState((prevState, props) => {
        this.setState(prevState => {
            console.log(prevState.persons.slice(0,1));

            console.log(prevState.persons.slice(2));

            const r = {
                persons: [
                    ...prevState.persons.slice(0,1),
                    {...prevState.persons[1], name: 'Manu Chao aaaaaaaaaaaaaaaaaa'},
                    ...prevState.persons.slice(2)
                ]
            };

            console.log(this.state.persons);

            return r;
        });

        // this.setState({
        //     persons: [
        //         persons.slice(0,1),
        //         {...persons[1], name: 'Manu Chao'},
        //         persons.slice(2)
        //     ]
        // })
    }

    render() {
        return (
            <div className="App">
                <h1>Burger App</h1>

                <p>
                    <button onClick={this.switch2ndPersonNameHandler}>Switch Name</button>
                </p>

                <div className="people">
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age} />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        switchName={this.switch2ndPersonNameHandler}>My hobbies: racing</Person>
                    <Person
                        name={this.state.persons[2].name} />
                </div>
            </div>
        );
    }
}

export default App;
