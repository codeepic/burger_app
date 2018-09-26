import React, {Component} from 'react';
import './App.css';
import Radium, {StyleRoot} from "radium";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
// above: Radium imports the default export from the file and
// StyleRoot imports the named export

class App extends Component {
    state = {
        persons: [
            {id: '22a', name: "Max", age: 38},
            {id: '23v', name: "Manu", age: 20},
            {id: '34d', name: "Stephanie", age: 26}
        ],
        showPeople: false
    };

    nameChangedHandler = (val , index) => {
        this.setState(prevState => {
           return {
               persons: [
                   ...prevState.persons.slice(0, index),
                   {...prevState.persons[index], name: val},
                   ...prevState.persons.slice(index+1)
               ]
           }
        });
    };

    togglePeopleDiv = () => {
        const shows = this.state.showPeople;
        this.setState({showPeople: !shows})
    };

    deletePersonHandler = (index) => {
        console.log('delete: ', index);
        this.setState(prevState => {
            return {
                persons: [
                    ...prevState.persons.slice(0, index),
                    ...prevState.persons.slice(index+1)
                ]
            };
        })
    };

    render() {
        let persons = null;

        if(this.state.showPeople){
            persons = (
                <div className="people">
                    <Persons
                        persons={this.state.persons}
                        deleted={this.deletePersonHandler}
                        changed={this.nameChangedHandler} />
                </div>
            );
        }

        // StyleRoot needs to wrap the whole application in order for
        // the media query inside Person.js component to work
        return (
            <StyleRoot>
                <div className="App">
                    <Cockpit
                        showPeople={this.state.showPeople}
                        toggled={this.togglePeopleDiv} />
                    {persons}
                </div>
            </StyleRoot>
        );
    }
}

// export default App;
export default Radium(App);
