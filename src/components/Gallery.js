import PropTypes from "prop-types"
import React, { Component } from "react"
import GalleryItem from "./GalleryItem"
import Button from "./Button"
import Title from "./Title"
import "./gallery.css"

export default class Gallery extends Component {
  renderGallery(c) {
    let gallery
    const { items } = this.props

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

  render() {
    const { fullPortfolio, title, handleClick } = this.props
    //const { gallery, floatButton } = this
    const btnText = fullPortfolio ? "Hide portfolio" : "See full portfolio"
    const renderGallery = this.renderGallery("<")
    const renderFullGallery = fullPortfolio ? this.renderGallery(">") : null
    const floatButton = (
      <Button handleClick={handleClick} className="button-float">
        Hide Portfolio
      </Button>
    )
    const renderfloatButton = fullPortfolio && floatButton

    return (
      <section id="two" className="portfolio-home">
        <Title>{title}</Title>
        <div className="portfolio-grid">
          {renderGallery}
          <div className="button-portfolio-container">
            <Button handleClick={handleClick}>{btnText}</Button>
          </div>
          {renderFullGallery}
          {renderfloatButton}
        </div>
      </section>
    )
  }
}

Gallery.displayName = "Gallery"
Gallery.propTypes = {
  images: PropTypes.array,
}
