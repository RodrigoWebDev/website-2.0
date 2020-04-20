import React from "react"
import Title from "../components/Title"
import Gallery from "../components/Gallery"

export default props => (
  <section id="two" className="portfolio-home">
    <Title>Portfolio</Title>

    <Gallery
      handleClick={props.handleClick}
      fullPortfolio={props.fullPortfolio}
      items={props.items}
    />
  </section>
)
