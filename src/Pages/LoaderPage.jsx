import React from 'react';
import Icon from "../Components/LoaderPage/Icon";

const LoaderPage = ({done}) => {
    return (
        <div className="loaderPage">
            <div className="logoWrapper">
                <Icon className="loader-logo"/>
            </div>
            <div
                className={`loader__progress ${done ? "loader__progress--done" : ""}`}
            ></div>
            <h1 className="loader-title">Whatsapp</h1>
            <p className="loaderDesc">
                <Icon id="lock" className="loader__icon" />
                End-to-end encrypted.
            </p>
        </div>
    )
}

export default LoaderPage