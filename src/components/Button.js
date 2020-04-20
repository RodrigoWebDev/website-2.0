import React from "react"

export default props => (
  <a
    href={props.href}
    target="_blank"
    className={`button hvr-skew-forward ${props.className || ""}`}
    onClick={props.handleClick}
    rel="noopener noreferrer"
  >
    {props.children}
  </a>
)
