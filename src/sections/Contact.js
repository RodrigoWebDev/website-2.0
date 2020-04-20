import React from "react"
import Button from "../components/Button"

export default () => (
  <section id="three" className="contact">
    <h2 className="section-title">Get it in touch</h2>
    <p>
      Do you want to chat, talk about business or are you interested in mine
      services? Then see below for ways to get in touch :)
    </p>
    <div>
      <ul className="actions">
        <li>
          <Button
            className="icon icon fa-whatsapp"
            href="https://api.whatsapp.com/send?1=pt_BR&phone=5511961198782"
          >
            What's app
          </Button>
        </li>
        <li>
          <Button
            className="icon icon fa-envelope-o"
            href="mailto:rodrigo.queiroz.chagas@gmail.com"
          >
            Email
          </Button>
        </li>
        <li>
          <Button
            className="icon fa-linkedin-square"
            href="https://www.linkedin.com/in/rodrigo-queiroz-chagas/"
          >
            Linkedin
          </Button>
        </li>
      </ul>
    </div>
  </section>
)
