import React from "react"

export default () => (
  <section id="three">
    <h2>Get it in touch</h2>
    <p>
      Do you want to chat, talk about business or are you interested in mine
      services? Then see below for ways to get in touch :)
    </p>
    <div>
      <ul className="actions">
        <li>
          <a
            className="button icon fa-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?1=pt_BR&phone=5511961198782"
          >
            What's app
          </a>
        </li>
        <li>
          <a
            className="button icon fa-envelope-o"
            href="mailto:rodrigo.queiroz.chagas@gmail.com"
          >
            Email
          </a>
        </li>
        <li>
          <a
            className="button icon fa-linkedin-square"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/rodrigo-queiroz-chagas/"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  </section>
)
