import React from 'react';

let styling = {
    margin: '20px',
    padding: '6px',
    backgroundColor: 'white',
    // flexDirection: 'column',
    // justifyContent: 'flex-end'
}

const DeleteButton = (props)=> {
    return (
        <button onClick={() => props.click(props.id)} className={`button ${props.type}`} style={styling}>{props.name}</button>
    );
}


export default DeleteButton;