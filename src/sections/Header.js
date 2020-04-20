import React from "react"
import Footer from "./Footer"
import avatar from "../assets/images/avatar.jpg"

export default props => (
  <header id="header">
    <div className="inner">
      <div className="image avatar">
        <img className="hvr-grow-shadow" src={avatar} alt="Rodrigo Queiroz" />
      </div>
      <h1 className="header__title">
        <strong>Rodrigo Queiroz</strong>, Front End developer
        <br /> and future Full Stack Node.
        <br /> Welcome to my website :)
      </h1>
    </div>
    <Footer />
  </header>
)
