import React from 'react';
import PropTypes from 'prop-types';

import Gallery from './Gallery';

const GalleryList = ({galleryList, galleries, files, onClick}) => (
    <div>
      {galleryList.map(gallery => <Gallery
        key={galleries[gallery].slug}
        slug={galleries[gallery].slug}
        title={galleries[gallery].title}
        picture={files[galleries[gallery].coverImage.sys.id].file.url}
        onClick={onClick} />)}
    </div>);

GalleryList.propTypes = {
  galleryList: PropTypes.arrayOf(PropTypes.string).isRequired,
  galleries: PropTypes.object.isRequired,
  files: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default GalleryList;
