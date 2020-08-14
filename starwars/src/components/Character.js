// Write your Character component here
import React from 'react';

export default function Character(props){
    const {characterInfoObj} = props

    return(
        <div>
            <p>Name: {characterInfoObj.name} Height: {characterInfoObj.height} Mass: {characterInfoObj.mass}</p>
        </div>
    )
}