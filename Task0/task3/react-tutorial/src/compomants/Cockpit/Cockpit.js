import React from 'react';

import './Cockpit.css'
const cockpit = (props) => {
        // let classes = ['font-size'];
    
		// if (props.person.length <=2) {
		// 	classes.push('red');
		// }
		// if (props.person.length<=1) {
		// 	classes.push('bold');
		// }
    return (
        <div className= "Cockpit">
            <h1>
                Hi, am Creating React Js App
            </h1>
            <p>
                This is really working
            </p>
            <button className="button-class"
                onClick={props.clicked} >
                Toggle Persons
            </button>
        </div>

    );
}
export default cockpit;