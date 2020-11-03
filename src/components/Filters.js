import React from "react"

export default props => {
  return (
    <ul id="filters">
    {
      props.filters.map(item => {
        return <li onClick={() => props.clickFilters(item)} data-filter={item}>{item}</li>
      })
    }
    </ul>
  )
}
