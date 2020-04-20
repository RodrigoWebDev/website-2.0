import React from "react"
import Header from "./Header"
import Button from "../components/Button"
import "./layout.css"

export default props => (
  <div>
    <Header />
    {props.children}
  </div>
)
