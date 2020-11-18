import React, {useState} from "react"
import "./tag.css"

export default ({dataItem, clickFilters}) => {
  const [filterActive, setFilterActive] = useState(false)
  const toggleActive = () => filterActive ? "tag-active" : ""
  const click = () => {
    clickFilters(dataItem)
    setFilterActive(!filterActive)
  }
  return <li className={`tag ${toggleActive()}`} onClick={() => click()} data-filter={dataItem}>{dataItem}</li>
}
