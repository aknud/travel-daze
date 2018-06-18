import React from 'react';

let styling = {
    margin: '20px 0',
    padding: '10px'
}

const Button = (props)=> {

    return (
        <button onClick={() => props.click()} className={`button ${props.type}`} style={styling}>{props.name} </button>
    );
}


export default Button;