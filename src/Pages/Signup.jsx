import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/Whatsapp-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authProvider";

const Signup = () => {
    const { signupWithUserCredentials, emailValidate } = useAuth();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(
        password
    );
    const matchPassword = confirmPassword === password && confirmPassword !== "";
    const isEmptyFields =
        !email.trim().length || !password.trim().length || !name.trim().length;

    const signupHandler = async (event) => {
        event.preventDefault();
        if (emailValidate(email)) {
            if (isPasswordValid) {
                if (matchPassword) {
                    setLoading(true);
                    const { user, message } = await signupWithUserCredentials(
                        name,
                        email,
                        password
                    );
                    if (user !== null) {
                        navigate("/home");
                        return;
                    }
                    setError(message);
                    return;
                }
                setError("Both passwords must be same");
                return;
            }
            setError(
                "Password must be 8 characters long, have one upper and lower case character and one number."
            );
            return;
        }
        setError("Enter Valid Email");
    };

    return (
        <div className="form-container-signup">
            <div className="logo-wattsap">
                <img src={Logo} alt="wattsap-logo" className="wattsap-logo" />
            </div>
            <form onSubmit={(event) => signupHandler(event)} className="form-style">
                <FormTitle>Join Wattsap Today</FormTitle>
                {error !== "" && <p className="error-style">{error}</p>}
                <InputContainer>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <InputField
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="text">name</InputLabel>
                    <InputField
                        id="name"
                        type="name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <InputField
                        id="password"
                        type="password"
                        placeholder="Your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="password">ConfirmPassword</InputLabel>
                    <InputField
                        id="password"
                        type="password"
                        placeholder="Your password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </InputContainer>

                <div className="btn-auth">
                    <button
                        type="submit"
                        className="style-btn-auth"
                        disabled={isEmptyFields}
                    >
                        {loading ? "Signing Up..." : "Sign up"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export const InputField = styled.input`
  background: #202225;
  outline: none;
  border: none;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  padding: 8px;
`;
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
`;
export const InputContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const InputLabel = styled.label`
  color: #adafb3;
  font-size: 16px;
`;
export const FormTitle = styled.h2`
  color: #fff;
  font-family: "Syne Mono", monospace;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`;

export default Signup;