import React from 'react';

//where do I put the addChore() for the onClick???

const Button = (props)=> {
    const name = props.name;
    const type = props.type;
    return (
        <button className={`button ${type}`}>{name}</button>
    );
}


export default Button;