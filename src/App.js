import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {id: '22a', name: "Max", age: 38},
            {id: '23v', name: "Manu", age: 20},
            {id: '34d', name: "Stephanie", age: 26}
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

        // this.setState({
        //     persons: [
        //         {name: "Maxddd", age: 38},
        //         {name: event.target.value, age: 20},
        //         {name: "Stephaniddd e", age: 26}
        //     ]
        // })
    };

    togglePeopleDiv = () => {
        //toggle .people divs
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
                    {this.state.persons.map((person, index)=> {
                        return <Person
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            delete={() => this.deletePersonHandler(index)}
                            changed={(val) => this.nameChangedHandler(val, index)}/>
                    })}
                    {/*<Person*/}
                        {/*name={this.state.persons[0].name}*/}
                        {/*age={this.state.persons[0].age}*/}
                        {/*switchName={(name) => this.switchNameHandler(0, name)} />*/}
                    {/*<Person*/}
                        {/*name={this.state.persons[1].name}*/}
                        {/*age={this.state.persons[1].age}*/}
                        {/*switchName={this.switchNameHandler.bind(this, 1, 'Lucas')}*/}
                        {/*changed={this.nameChangedHandler}>My hobbies: racing</Person>*/}
                    {/*<Person*/}
                        {/*name={this.state.persons[2].name}*/}
                        {/*switchName={this.switchNameHandler.bind(this, 2, 'Agnes')} />*/}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Burger App</h1>

                <p>
                    <button onClick={this.togglePeopleDiv}>Toggle</button>
                </p>

                {persons}
            </div>
        );
    }
}

export default App;
