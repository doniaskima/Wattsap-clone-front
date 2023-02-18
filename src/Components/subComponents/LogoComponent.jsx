import React from 'react';
import styled from "styled-components";
import { DarkTheme } from '../Themes';

const Logo = styled.h1`
display:inline-block;
font-family: 'Pacifico',cursive;
position:fixed;
top:2rem;
left:2rem;
z-index:3;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`


const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
            WhatsApp
        </Logo>
    )
}

export default LogoComponent