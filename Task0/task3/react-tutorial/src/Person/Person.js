import React from 'react';
import './Person.css';
import Radium from 'radium';
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}> Iam the person {props.name} Iam {props.age} years old</p>
            {/* <p>{props.children}</p> */}
            <input type="text" onChange={props.changed} value ={props.name} />
        </div>
    )

};
export default Radium(person);