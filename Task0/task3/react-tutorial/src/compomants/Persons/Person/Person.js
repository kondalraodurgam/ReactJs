import React from 'react';
import './Person.css';
import Radium from 'radium';
const person = (props) => {
    const rand = Math.random();
    if(rand > 4 ) {
        throw new Error('Something went wrong');
    }

    return (
        <div> 
            <p onClick={props.click}> Iam the person {props.name} Iam {props.age} years old</p>
            {/* <p>{props.children}</p> */}
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )

};
export default Radium(person);