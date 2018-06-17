import React from 'react';


const Button = (props)=> {
    console.log(6666, props)
    return (
        <button onClick={() => props.click()} className={`button ${props.type}`}>{props.name}</button>
    );
}


export default Button;