import React from "react"
import email from "../assets/images/services/email.png"
import gears from "../assets/images/services/gears.png"
import psd from "../assets/images/services/psd.png"
import shop from "../assets/images/services/shop.png"
import website from "../assets/images/services/website.png"
import wordpress from "../assets/images/services/wordpress.png"
import Button from "../components/Button"
import Title from "../components/Title"
import "../assets/css/services.css"

export default () => (
  <section className="services">
    <Title>My services</Title>
    <ul>
      <li>
        <img src={website} />
        <h3>Website</h3>
        <p>Have a beautiful, fast and responsive website</p>
      </li>

      <li>
        <img src={wordpress} />
        <h3>Wordpress Website</h3>
        <p>
          Take full control of your website with the most popular CMS in the
          world
        </p>
      </li>

      <li>
        <img src={psd} />
        <h3>PSD to HTML/Wordpress</h3>
        <p>
          Do you already have your website design? So it's time to convert it to
          code
        </p>
      </li>

      <li>
        <img src={shop} />
        <h3>Ecommerce Website</h3>
        <p>
          With the help of platforms like shopify, you can have an online
          business
        </p>
      </li>

      <li>
        <img src={email} />
        <h3>Email Marketgin Template</h3>
        <p>Send beautiful, professional emails</p>
      </li>

      <li>
        <img src={gears} />
        <h3>Website Adjustments</h3>
        <p>And not least, keep your website up to date and working well</p>
      </li>
    </ul>
    <Button
      className="icon fa-envelope-o"
      href="mailto:rodrigo.queiroz.chagas@gmail.com"
    >
      get in touch
    </Button>
  </section>
)
