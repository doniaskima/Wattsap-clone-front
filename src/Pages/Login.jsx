import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import LogoComponent from '../Components/subComponents/LogoComponent';
import BigTitle from '../Components/subComponents/BigTitle';
import { DarkTheme } from '../Components/Themes';
import ParticleComponent from '../Components/subComponents/ParticleComponent';
import WatsApp from "../assets/Whatsapp.png"
import phone from "../assets/phone.png"



const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`

const WattsApp = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`

const Login = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark' />
                <ParticleComponent theme='dark' />

                <WattsApp>
                    <img src={WatsApp} alt="WatsApp" />
                </WattsApp>
                <Main>
                    <form action="">
                        <FormTitle>
                            Join Wattsap Today
                        </FormTitle>
                        <InputContainer>
                            <InputLabel
                                htmlFor="email">
                                Email
                            </InputLabel>
                            <InputField
                                id="email"
                                type="email"
                                placeholder="Your Email"
                            />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel
                                htmlFor="password"
                            >
                                Password
                            </InputLabel>
                            <InputField
                                id="password"
                                type="password"
                                placeholder="Your password"

                            />
                        </InputContainer>
                        <div className="btn-auth">
                            <button
                                type="submit"
                                className="style-btn-auth"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </Main>

                <BigTitle text="Login" top="15%" left="2%" right="65%" />
            </Box>
        </ThemeProvider>
    )
}

export const FormTitle = styled.h2`
  color: #fff;
font-family: 'Syne Mono', monospace;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`
export const InputContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const InputLabel = styled.label`
  color: #adafb3;
  font-size: 16px;
`
export const InputField = styled.input`
  background: #202225;
  outline: none;
  border: none;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  padding: 8px;
`

export default Login