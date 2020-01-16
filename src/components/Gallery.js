import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullPortfolio: false
        }
        this.handleCLick = this.handleCLick.bind(this);
    }

    handleCLick(){
        this.setState({
            fullPortfolio : !this.state.fullPortfolio
        });
    }
    
    renderGallery () {
        const { images } = this.props;

        if (!images) return;

        const gallery = images.map((obj, i) => {
            if(i <= 3){
                return (
                    <div key={i}>
                        <a
                            target="_blank"
                            className="portfolio-link-img"
                            href={obj.Url}
                        >
                            <img src={`${require('../assets/images/portfolio/' + obj.Thumb)}`} />
                        </a>
    
                        <h3>{obj.Name}</h3>
                        <p><a target="_blank" className="portfolio-link" href={obj.Url}>{obj.Url}</a></p>
                    </div>
                );
            }
        });

        const galleryFull = images.map((obj, i) => {
            if(i > 3){
                return (
                    <div key={i}>
                        <a
                            target="_blank"
                            className="portfolio-link-img"
                            href={obj.Url}
                        >
                            <img src={`${require('../assets/images/portfolio/' + obj.Thumb)}`} />
                        </a>
    
                        <h3>{obj.Name}</h3>
                        <p><a target="_blank" className="portfolio-link" href={obj.Url}>{obj.Url}</a></p>
                    </div>
                );
            }
        });

        return (
            <div className="portfolio-grid">
                {gallery}
                <div className="button-portfolio-container">
                    <button className="button" onClick={this.handleCLick}>
                        {this.state.fullPortfolio ? "Ocultar porfolio" : "Ver portfólio completo"}
                    </button>
                </div>
                {this.state.fullPortfolio ? galleryFull : null}
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