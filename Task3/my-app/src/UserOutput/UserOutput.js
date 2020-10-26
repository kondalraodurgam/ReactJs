import { render } from '@testing-library/react';
import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>User Name : {props.userName}</p>
            <p>I hope you'll over written</p>
        </div>
        
    )
}
export default UserOutput;