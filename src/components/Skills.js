import React from "react"

export default ({ skills }) => (
  <div>
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
  </div>
)
