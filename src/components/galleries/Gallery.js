import React from 'react'
import PropTypes from 'prop-types'

import {galleryType} from '../../types'

const Gallery = ({gallery, onClick}) => {
  const progressiveJPEGPicture = `${gallery.picture}?fm=jpg&fl=progressive&w=1200&h=800&q=70`
  const alternativeText = `${gallery.title} cover`
  return (
    <div className="gallery" onClick={onClick}>
      <h2>{gallery.title}</h2>
      <img src={progressiveJPEGPicture} alt={alternativeText} width="600" height="10" />
    </div>);
}

Gallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  gallery: galleryType.isRequired,
}

export default Gallery;
