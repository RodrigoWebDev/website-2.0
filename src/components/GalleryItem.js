import React from "react"
import defaultPortfolioImg from "../assets/images/default-portfolio-img.png"

const GalleryItem = props => {
  const obj = props.obj
  const { homepage, html_url, description } = obj
  const checkHomepage = homepage === null || homepage === ""
  const link = checkHomepage ? html_url : homepage
  const name = obj.name.split("-").join(" ")
  const src = checkHomepage ? defaultPortfolioImg : `${homepage}thumb.jpg`

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
        <p>{description}</p>
      </a>
    </div>
  )
}

export default GalleryItem
