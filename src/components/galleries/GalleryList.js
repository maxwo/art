import React from 'react';
import PropTypes from 'prop-types';

import Gallery from './Gallery';
import {galleryType} from '../../types'

const GalleryList = ({galleries, onClick}) => {
  console.log(galleries);
  return (
    <div>
      {galleries.map(gallery => <Gallery
        key={gallery.id}
        gallery={gallery}
        onClick={onClick} />)}
    </div>)};

GalleryList.propTypes = {
  galleries: PropTypes.arrayOf(galleryType).isRequired,
}

export default GalleryList;
