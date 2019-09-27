import React from 'react';
import './App.css'

//function Tweet(props){ //rather than writing this props and using it like props.name, props.message, props.likes
//we can simply deconstructur all the properties in a variable and use it like a variable

function Tweet({name, message, likes}){

    return(
        <div className='tweet'>
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>{likes}</h3>
        </div>
    )
}

export default Tweet;