import React from "react";
import PropTypes from "prop-types";
import Gallery from "./Gallery";
import { galleryType } from "../../types";

const GalleryList = ({ galleries, onClick }) => {
  return (
    <ul className="gallerylist">
      {galleries.map(gallery => (
        <Gallery key={gallery.id} gallery={gallery} onClick={onClick} />
      ))}
    </ul>
  );
};

GalleryList.propTypes = {
  galleries: PropTypes.arrayOf(galleryType).isRequired
};

export default GalleryList;
