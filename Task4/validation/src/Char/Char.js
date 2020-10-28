import React from 'react';
const char = (props)=> {
    const style = {
        display : 'inline-block',
        border : '2px solid #ccc',
        margin : '16px',
        padding: '16px',
        textAlign : 'center'
    }
    return(
        
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    )
}
export default char;