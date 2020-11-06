import React from 'react';
// import './Person.css';
import Radium from 'radium';
import styled from 'styled-components';
const person = (props) => {
    const styledDiv = styled.div`
        width: 60%;
        margin :16px auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;
        margin-bottom: 15px;
        @media(min-width: 500px)  {
            width: 450px;
        }
        
    `;

    return (
        <styledDiv>
            <p onClick={props.click}> Iam the person {props.name} Iam {props.age} years old</p>
            {/* <p>{props.children}</p> */}
            <input type="text" onChange={props.changed} value={props.name} />
        </styledDiv>
    )

};
export default Radium(person);