import React from 'react'
import PropTypes from 'prop-types'

const Gallery = ({title, picture, onClick}) => {
  const progressiveJPEGPicture = `${picture}?fm=jpg&fl=progressive&w=1200&h=800&q=70`
  return (
    <div className="gallery" onClick={onClick}>
      <h2>{title}</h2>
      <img src={progressiveJPEGPicture} width="600" height="400" />
    </div>);
}

Gallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
}

export default Gallery;
