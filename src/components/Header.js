import React from "react"
import Footer from "./Footer"
import avatar from "../assets/images/avatar.jpg"

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <div className="image avatar">
            <img src={avatar} alt="Rodrigo Queiroz" />
          </div>
          <h1>
            <strong>Rodrigo Queiroz</strong>, Front End developer
            <br /> and future Full Stack Node.
            <br /> Welcome to my website :)
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
