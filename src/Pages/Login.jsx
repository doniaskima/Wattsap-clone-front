import React from 'react'
import styled from "styled-components";

const Login = () => {
    return (
        <div className="form-container">
            <form className="form-style">
                <FormTitle>
                    Join Wattsap Today
                    <InputContainer>
                        <InputLabel
                            htmlFor="email"
                        >
                            Email
                        </InputLabel>

                        <InputField
                            id="email"
                            type="email"
                        />
                    </InputContainer>
                    <InputContainer>
                        <InputLabel
                            htmlFor="password"
                        >
                            Password
                        </InputLabel>

                        <InputField
                            id="email"
                            type="email"
                        />
                    </InputContainer>
                </FormTitle>
            </form>
        </div>
    )
}

export const FormTitle = styled.h2`
color:black;
fonr-size:22px;
font-weight:500;
margin-bottom:20px;
text-align:center;
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