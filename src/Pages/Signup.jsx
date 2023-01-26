import React from 'react'
import styled from "styled-components";
import Logo from "../assets/Whatsapp-logo.png";


const Signup = () => {
    return (
        <div className="form-container-signup">
            <div className="logo-wattsap">
                <img src={Logo} alt="wattsap-logo" className="wattsap-logo" />
            </div>
            <form className="form-style">
                <FormTitle>
                    Join Wattsap Today
                </FormTitle>
                <InputContainer>
                    <InputLabel htmlFor="email">
                        Email
                    </InputLabel>
                    <InputField
                        id="email"
                        type="email"
                        placeholder="Your Email"
                       
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="text">FirstName</InputLabel>
                    <InputField
                        id="firstName"
                        type="firstName"
                        placeholder="Your FirstName"
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="text">LastName</InputLabel>
                    <InputField
                        id="Lastname"
                        type="Lastname"
                        placeholder="Your Name"
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <InputField
                        id="password"
                        type="password"
                        placeholder="Your password"

                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="password">ConfirmPassword</InputLabel>
                    <InputField
                        id="password"
                        type="password"
                        placeholder="Your password"
                    />
                </InputContainer>

            </form>
        </div>


    )
}

export const InputField = styled.input`
  background: #202225;
  outline: none;
  border: none;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  padding: 8px;
`
export const TextAreaField = styled.textarea`
  background: #202225;
  outline: none;
  border: none;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  height: 150px;
  resize: none;
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
export const FormTitle = styled.h2`
  color: #fff;
font-family: 'Syne Mono', monospace;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`

export default Signup