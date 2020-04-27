import React from "react";
import PropTypes from "prop-types";
import { galleryType } from "../../types";

const Gallery = ({ gallery, onClick }) => {
  const progressiveJPEGPicture = `${gallery.picture}?fm=jpg&fl=progressive&w=1200&h=800&q=70`;
  const backgroundImage = `url(${progressiveJPEGPicture}`;
  return (
    <li className="gallerylist__gallery" onClick={() => onClick(gallery)}>
      <img src={progressiveJPEGPicture} />
      <h2 className="gallerylist__gallery__title">{gallery.title}</h2>
    </li>
  );
};

Gallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  gallery: galleryType.isRequired
};

export default Gallery;
