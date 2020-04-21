import React from "react"
import email from "../assets/images/services/email.png"
import gears from "../assets/images/services/gears.png"
import psd from "../assets/images/services/psd.png"
import shop from "../assets/images/services/shop.png"
import website from "../assets/images/services/website.png"
import wordpress from "../assets/images/services/wordpress.png"
import Button from "../components/Button"
import Title from "../components/Title"
import Slider from "slick"
import "../assets/css/services.css"

export default props => (
  <section className="services">
    <Title>My services</Title>
    <ul>
      {props.serv.map(item => (
        <li key={item.nam}>
          <img src={`${require("../assets/images/services/" + item.image)}`} />
          <h3>{item.name}</h3>
          <p>{item.desription}</p>
        </li>
      ))}
    </ul>
    <Button
      className="icon fa-envelope-o"
      href="mailto:rodrigo.queiroz.chagas@gmail.com"
    >
      get in touch
    </Button>
  </section>
)
