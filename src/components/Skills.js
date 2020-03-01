import React from "react"
import Collapsible from "react-collapsible"

export default ({ skills }) => (
  <div>
    {skills.map((item, index) => {
      const { Name, Libs } = item
      return (
        <div key={index}>
          <Collapsible open={true} trigger={Name}>
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
          </Collapsible>
        </div>
      )
    })}
  </div>
)
