// Write your Character component here
import React from 'react';
import styled from 'styled-components'

export default function Character(props){
    const {characterInfoObj} = props

    const StyledCharacter = styled.div`
    
    p{
        color: ${props => {
        const { theme } = props;
        return theme.primaryColor;
    }};

    }
    
    `

    return(
        <StyledCharacter>
        <p>Name: {characterInfoObj.name} Height: {characterInfoObj.height} Mass: {characterInfoObj.mass}</p>
        </StyledCharacter>
    )
}