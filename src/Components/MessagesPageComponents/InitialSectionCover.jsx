import React from 'react'
import styled from "styled-components";
import connectImg from "../../assets/connection.jpg";
import Icon from "../../Components/LoaderPage/Icon"

const InitialSectionCover = () => {
    return (
        <InitialSection>
            <div className="img-wrapper">
                <img src={connectImg} alt="connect-img" className="connect-img" />
            </div>
            <h1 className="initialSection-title">Keep your phone connected</h1>
            <p className="initialSection-text">
                WhatsApp connects to your phone to sync messages. To reduce data usage,
                connect your phone to Wi-Fi.
            </p>
            <p className="home-text">
                <Icon id="laptop" className="home-icon" />
                <span>
                    WhatsApp is available for Windows, Mac ,and Linux.{" "}
                    <a
                        href="https://www.whatsapp.com/download"
                        target="_blank"
                        className="home-link"
                    >
                        {" "}
                        Get it here
                    </a>
                    .
                </span>
            </p>
        </InitialSection>
    )
}

export const InitialSection = styled.div`
    padding: 20px;
    height: 100%;
    flex: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: rgb(38, 45, 49);
    border-bottom-color: #056162;
 
`

export default InitialSectionCover