import React from 'react'

const validation = (props)=>{
    let validationMessage = 'Text is too short';
    if ( props.inputLength> 5) {
        validationMessage = 'Text is too Long';
    }
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}
export default validation;