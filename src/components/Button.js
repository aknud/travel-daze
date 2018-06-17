import React from 'react';


const Button = (props)=> {
    return (
        <button className={`button ${props.type}`}>{props.name}</button>
    );
}


export default Button;