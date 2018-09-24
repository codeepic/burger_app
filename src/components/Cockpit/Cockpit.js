import React from "react";

const cockpit = props => {
    let classes;

    if(props.showPeople){
        classes = 'green';
    }else{
        classes = 'red bold';
    }

    return (
        <div>
            <h1>Demo App</h1>

            <p className={'para ' + classes}>Some description text</p>

            <p>
                <button onClick={props.toggled}>Toggle</button>
            </p>
        </div>
    )
}

export default cockpit;
