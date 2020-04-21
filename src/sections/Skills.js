import React, { Component } from "react"
import Title from "../components/Title"
import "./skills.css"

export default class Skills extends Component {
  renderLibs(skills) {
    return (
      <>
        {skills.map((item, index) => {
          const { name, percentage } = item
          return (
            <div className="progress-bar-container" key={index}>
              <div className="progress">
                <h3 className="progress__title">{name}</h3>
                <div className="progress__bar">
                  <div
                    className="progress__bar-line"
                    style={{ width: percentage }}
                  ></div>
                </div>
              </div>
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
