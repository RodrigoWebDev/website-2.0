import React from "react"
import defaultPortfolioImg1 from "../assets/images/portfolio-default/default-portfolio-img.png"
import defaultPortfolioImg2 from "../assets/images/portfolio-default/default-portfolio-img2.jpg"
import defaultPortfolioImg3 from "../assets/images/portfolio-default/default-portfolio-img3.png"
import defaultPortfolioImg4 from "../assets/images/portfolio-default/default-portfolio-img4.jpeg"
import defaultPortfolioImg5 from "../assets/images/portfolio-default/default-portfolio-img5.png"
import defaultPortfolioImg6 from "../assets/images/portfolio-default/default-portfolio-img6.jpg"
import defaultPortfolioImg7 from "../assets/images/portfolio-default/default-portfolio-img7.jpg"
import defaultPortfolioImg8 from "../assets/images/portfolio-default/default-portfolio-img8.png"
import defaultPortfolioImg9 from "../assets/images/portfolio-default/default-portfolio-img9.png"
import defaultPortfolioImg10 from "../assets/images/portfolio-default/default-portfolio-img10.jpg"
import defaultPortfolioImg11 from "../assets/images/portfolio-default/default-portfolio-img11.png"
import defaultPortfolioImg12 from "../assets/images/portfolio-default/default-portfolio-img12.png"
import defaultPortfolioImg13 from "../assets/images/portfolio-default/default-portfolio-img13.png"

const GalleryItem = props => {
  const obj = props.obj
  const { homepage, html_url, description, fork, full_name } = obj
  const checkHomepage = homepage === null || homepage === ""
  const link = checkHomepage ? html_url : homepage
  const name = obj.name.split("-").join(" ")
  const defaultImg = [
    defaultPortfolioImg1,
    defaultPortfolioImg2,
    defaultPortfolioImg3,
    defaultPortfolioImg4,
    defaultPortfolioImg5,
    defaultPortfolioImg6,
    defaultPortfolioImg7,
    defaultPortfolioImg8,
    defaultPortfolioImg9,
    defaultPortfolioImg10,
    defaultPortfolioImg11,
    defaultPortfolioImg12,
    defaultPortfolioImg13,
  ]
  const src = checkHomepage
    ? getRandomImg()
    : `https://raw.githubusercontent.com/${full_name}/master/thumb.jpg`

  function getRandomImg() {
    let randomIndex = Math.floor(Math.random() * defaultImg.length)
    return defaultImg[randomIndex]
  }

  return (
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="portfolio-link"
        href={link}
      >
        <div className="portfolio__img-box">
          <img src={src} alt={name} />
        </div>
        <h3 className="portfolio__name">{name}</h3>
        <p className="portfolio__description">{description}</p>
      </a>
    </div>
  )
}

export default GalleryItem
