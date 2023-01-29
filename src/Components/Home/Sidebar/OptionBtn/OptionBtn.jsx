import React,{useState} from 'react'
import Icon from "../../../LoaderPage/Icon";

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
          <ul
              className={`options-btn__options ${showOptions ? "options-btn__options--active" : ""
                  } ${position === "right" ? "options-btn__options--right" : ""}`}
          >
              {options.map((option, index) => (
                  <li className="options-btn__option" key={index}>
                      {option}
                  </li>
              ))}
          </ul>
  </div>
  )
}

export default OptionBtn