import React,{useState} from 'react'

const OptionBtn = ({
    className,
    iconId,
    iconClassName,
    ariaLabel,
    options = [],
    position = "left",
    showPressed = true,
    ...props
}) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
      <div className="position">
          <button
              aria-label={ariaLabel}
              className={`options-btn ${showOptions && showPressed ? "options-btn--pressed" : ""
                  } ${className || ""}`}
              onClick={() => setShowOptions(!showOptions)}
              {...props}
          >
              <Icon id={iconId} className={iconClassName} /> 
          </button>
  </div>
  )
}

export default OptionBtn