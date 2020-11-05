import React from "react"
import "./tag.css"

export default props => {
  return (
    <ul id="filters">
    {
      props.filters.map(item => {
        return <li className="tag" onClick={() => props.clickFilters(item)} data-filter={item}>{item}</li>
      })
    }
    </ul>
  )
}
