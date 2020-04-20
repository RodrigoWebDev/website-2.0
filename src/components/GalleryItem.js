import React from "react"
//import defaultPortfolioImg from "../assets/images/default-portfolio-img.png"
import defaultPortfolioImg from "../assets/images/github.png"

const GalleryItem = props => {
  const obj = props.obj
  const { homepage, html_url, description, fork, full_name } = obj
  const checkHomepage = homepage === null || homepage === ""
  const link = checkHomepage ? html_url : homepage
  const name = obj.name.split("-").join(" ")
  const src = checkHomepage
    ? defaultPortfolioImg
    : `https://raw.githubusercontent.com/${full_name}/master/thumb.jpg`

  return (
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="portfolio-link"
        href={link}
      >
        <img src={src} alt={name} />
        <h3 className="portfolio__name">{name}</h3>
        <p className="portfolio__description">{description}</p>
      </a>
    </div>
  )
}

export default GalleryItem
