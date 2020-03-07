import PropTypes from "prop-types"
import React, { Component } from "react"
import GalleryItem from "./GalleryItem"

export default class Gallery extends Component {
  renderGallery(c) {
    let gallery
    const { images } = this.props

    if (!images) return

    if (c === "<") {
      gallery = images.map((obj, i) => {
        if (i <= 3) {
          return (
            <GalleryItem key={i} modalClick={this.props.modalClick} obj={obj} />
          )
        }
      })
    } else {
      gallery = images.map((obj, i) => {
        if (i > 3) {
          return <GalleryItem key={i} obj={obj} />
        }
      })
    }

    return gallery
  }

  render() {
    const { fullPortfolio } = this.props
    return (
      <>
        <div className="portfolio-grid">
          {this.renderGallery("<")}
          <div className="button-portfolio-container">
            <button className="button" onClick={this.props.handleClick}>
              {fullPortfolio ? "Hide portfolio" : "See full portfolio"}
            </button>
          </div>
          {fullPortfolio ? this.renderGallery(">") : null}
        </div>
      </>
    )
  }
}

Gallery.displayName = "Gallery"
Gallery.propTypes = {
  images: PropTypes.array,
}
