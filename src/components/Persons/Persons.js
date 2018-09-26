// make it a functional component, cause no need to manage state here
// in that case you only need to import React

// import React, {Component} from "react";
import React from "react";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";


const persons = props => {
    return props.persons.map((person, index)=> {
        return <ErrorBoundary key={person.id}>
            <Person
                position={index}
                name={person.name}
                age={person.age}
                delete={() => props.deleted(index)}
                changed={(val) => props.changed(val, index)} />
        </ErrorBoundary>;
    })
};

export default persons;
