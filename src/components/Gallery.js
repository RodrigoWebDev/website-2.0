import PropTypes from "prop-types"
import React, { Component } from "react"
import GalleryItem from "./GalleryItem"
import Button from "./Button"

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
    const { fullPortfolio } = this.props
    return (
      <>
        <div className="portfolio-grid">
          {this.renderGallery("<")}
          <div className="button-portfolio-container">
            <Button
              jref="javascript:void(0)"
              handleClick={this.props.handleClick}
            >
              {fullPortfolio ? "Hide portfolio" : "See full portfolio"}
            </Button>
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
