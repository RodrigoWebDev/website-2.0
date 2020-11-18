import PropTypes from "prop-types"
import React from "react"
import GalleryItem from "./GalleryItem"
import Button from "./Button"
import Title from "./Title"
import Loader from "./Loader"
import Filters from "../components/Filters";
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

  const { fullPortfolio, title, handleClick, isFetching, filters, clickFilters, galleryRef } = props
  const button = <Button handleClick={handleClick}>See full portfolio</Button>
  const floatButton = (
    <Button handleClick={handleClick} className="button-float">
      Hide Portfolio
    </Button>
  )

  const renderFullGallery = fullPortfolio ? renderGallery(">") : null
  const renderfloatButton = fullPortfolio && floatButton
  const renderButton = !fullPortfolio && button
  const renderLoader = isFetching ? <Loader /> : null
  const renderFilters = (!isFetching && fullPortfolio) ? <Filters filters={filters} clickFilters={clickFilters} /> : null

  return (
    <section id="two" className="portfolio-home" ref={galleryRef}>
      <Title>{title}</Title>
      {renderLoader}
      {renderFilters}
      <div className="portfolio-grid">
        {renderGallery("<")}
        <div className="button-portfolio-container">{renderButton}</div>
        {renderFullGallery}
        {renderfloatButton}
      </div>
    </section>
  )
}
