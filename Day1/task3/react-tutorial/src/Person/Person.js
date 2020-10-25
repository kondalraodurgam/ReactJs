import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>Iam the person {props.name} Iam {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )

};
export default person;