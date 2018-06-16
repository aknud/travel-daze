import React from 'react';

//where do I put the addChore() for the onClick???


const Button = (props)=> {
    return (
        <button className={`button ${props.type}`}>{props.name}</button>
    );
}


export default Button;