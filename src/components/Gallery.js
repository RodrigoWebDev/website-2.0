import PropTypes from "prop-types"
import React, { Component } from "react"
import GalleryItem from "./GalleryItem"

export default class Gallery extends Component {
  renderGallery(c) {
    let gallery
    const { items } = this.props

    console.log("items", items)

    if (!items) return

    if (c === "<") {
      gallery = items.map((item, i) => {
        if (i <= 3) {
          return (
            <GalleryItem
              key={i}
              modalClick={this.props.modalClick}
              obj={item}
            />
          )
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
