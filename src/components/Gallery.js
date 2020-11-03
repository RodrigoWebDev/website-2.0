import PropTypes from "prop-types"
import React from "react"
import GalleryItem from "./GalleryItem"
import Button from "./Button"
import Title from "./Title"
import Loader from "./Loader"
import "./gallery.css"

export default props => {
  const renderGallery = c => {
    let gallery
    const { items } = props

    if (!items) return

    if (c === "<") {
      gallery = items.map((item, i) => {
        if (i <= 3) {
          return <GalleryItem key={i} obj={item} />
        }
      })
    } else {
      gallery = items.map((item, i) => {
        if (i > 3) {
          return <GalleryItem key={i} obj={item} />
        }
      })
    }

    return gallery
  }

  const { fullPortfolio, title, handleClick, isFetching } = props
  //const { gallery, floatButton } = this
  const btnText = fullPortfolio ? "Hide portfolio" : "See full portfolio"
  const renderFullGallery = fullPortfolio ? renderGallery(">") : null
  const floatButton = (
    <Button handleClick={handleClick} className="button-float">
      Hide Portfolio
    </Button>
  )
  const renderfloatButton = fullPortfolio && floatButton
  const renderLoader = isFetching ? <Loader /> : null

  return (
    <section id="two" className="portfolio-home">
      <Title>{title}</Title>
      {renderLoader}
      <div className="portfolio-grid">
        {renderGallery("<")}
        <div className="button-portfolio-container">
          <Button handleClick={handleClick}>{btnText}</Button>
        </div>
        {renderFullGallery}
        {renderfloatButton}
      </div>
    </section>
  )
}
