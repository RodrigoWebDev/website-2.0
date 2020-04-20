import React, { Component } from "react"
import Title from "../components/Title"

export default class Skills extends Component {
  renderLibs(skills) {
    return (
      <>
        {skills.map((item, index) => {
          const { Name, Libs } = item
          return (
            <div key={index}>
              <h3 className="accordion">{Name}</h3>
              <ul className="panel">
                {Libs.map((e, i) => {
                  return (
                    <li key={i}>
                      <img
                        width="20"
                        src={`${require("../assets/images/skills/" + e.Icon)}`}
                        alt={e.Name}
                      />
                      {e.Name}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </>
    )
  }

  render() {
    const libs = this.renderLibs
    const { skills } = this.props
    return (
      <section id="one" className="about">
        <div className="skills">
          <Title>Skills</Title>
          <div>{libs(skills)}</div>
        </div>
      </section>
    )
  }
}
