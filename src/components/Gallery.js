import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Gallery extends Component {
    
    renderGallery () {
        const { images } = this.props;

        if (!images) return;

        const gallery = images.map((obj, i) => {
            if(i < 4){
                return (
                    <article className="6u 12u$(xsmall) work-item" key={i}>
                        <a
                            className="portfolio-link-img"
                            href={obj.Url}
                        >
                            <img src={`${require('../assets/images/portfolio/' + obj.Thumb)}`} />
                        </a>
    
                        <h3>{obj.Name}</h3>
                        <p><a className="portfolio-link" href={obj.Url}>{obj.Url}</a></p>
                    </article>
                );
            }
        });

        return (
            <div className="row">
                {gallery}
            </div>
        );
    }
    render () {
        return (
            <div>
                {this.renderGallery()}
            </div>
        );
    }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    images: PropTypes.array
};

export default Gallery;