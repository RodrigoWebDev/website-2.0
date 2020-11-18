import React from "react"
import "./tag.css"

export default ({dataItem, clickFilters, active}) => {
  //const [filterActive, setFilterActive] = useState(false)
  const toggleActive = () => active ? "tag-active" : ""
  return <li className={`tag ${toggleActive()}`} onClick={() => clickFilters(dataItem)} data-filter={dataItem}>{dataItem}</li>
}
