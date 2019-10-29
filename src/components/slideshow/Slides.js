import React from "react";
import PropTypes from "prop-types";
import Slide from "./Slide";
import { photoType, galleryType } from "../../types";
import showdown from "showdown";

const converter = new showdown.Converter();

const createColumn = (slideshow, currentColumn, columnCount) => {
  return (
    <div key={currentColumn}>
      <div className="slideshow__column">
        {slideshow
          .filter((slide, index) => index % columnCount === currentColumn)
          .map(slide => (
            <Slide key={slide.id} slide={slide} />
          ))}
      </div>
    </div>
  );
};

const createHeader = gallery => {
  if (typeof gallery !== "undefined") {
    const coverPicture = gallery.coverPicture;
    const backgroundImage = `url(${coverPicture.url}?fm=jpg&fl=progressive&q=100`;
    return (
      <div className="gallery__header" style={{ backgroundImage }}>
        <div className="gallery__header__quote">
          <q>{gallery.quote}</q>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

const createDescription = gallery => {
  if (typeof gallery !== "undefined") {
    const htmlDescription = converter.makeHtml(gallery.description);
    return (
      <div className="gallery__description">
        <div
          className="gallery__description__words"
          dangerouslySetInnerHTML={{ __html: htmlDescription }}
        />
      </div>
    );
  } else {
    return <div />;
  }
};

const Slides = ({ slideshow, gallery, onClick }) => {
  const columns = Array.from(Array(4), (x, index) => index);
  return (
    <div className="gallery">
      {createHeader(gallery)}
      {createDescription(gallery)}
      <div className="slideshow">
        {columns.map(currentColumn =>
          createColumn(slideshow, currentColumn, columns.length)
        )}
      </div>
    </div>
  );
};

Slides.propTypes = {
  slideshow: PropTypes.arrayOf(photoType).isRequired,
  gallery: galleryType
};

export default Slides;
