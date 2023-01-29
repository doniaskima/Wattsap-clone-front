import React from 'react';
import "../styles/main.scss"

const ModalWrapper = ({ariaLabel,callback,children}) => {
    return (
        <div
            aria-modal="true"
            aria-label={ariaLabel}
            role="dialog"
            onClick={callback}
            className="modalWrapper"
        >
            {children}
        </div>
    )
}

export default ModalWrapper