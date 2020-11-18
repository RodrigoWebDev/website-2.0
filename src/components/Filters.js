import React from "react"
import Tag from "./Tag"
import "./filters.css"

export default props => {
  return (
    <ul class="filters">
      <span class="filters__title">Filters: </span>
      {props.filters.map(item => <Tag clickFilters={props.clickFilters} dataItem={item.filter} active={item.active}/>)}
    </ul>
  )
}
