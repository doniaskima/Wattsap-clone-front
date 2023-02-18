import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import LogoComponent from '../Components/subComponents/LogoComponent';
import BigTitle from '../Components/subComponents/BigTitle';
import { DarkTheme } from '../Components/Themes';
import ParticleComponent from '../Components/subComponents/ParticleComponent';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`

const Login = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark' />
             
            </Box>
        </ThemeProvider>
    )
}

export default Login