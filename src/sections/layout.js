import React from "react"
import Header from "./Header"
import "../assets/css/custom.css"

export default props => (
  <div>
    <Header />
    {props.children}
  </div>
)
