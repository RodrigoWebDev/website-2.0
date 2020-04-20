import React from "react"
import Title from "../components/Title"

export default props => (
  <section>
    <header className="two">
      <Title>About me</Title>
    </header>
    <p>{props.metaData.About}</p>
  </section>
)
