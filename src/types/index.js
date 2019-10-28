import PropTypes from "prop-types";

export const photoType = PropTypes.shape({
  title: PropTypes.string,
  imageCaption: PropTypes.string,
  imageCredits: PropTypes.string
});

export const galleryType = PropTypes.shape({
  title: PropTypes.string,
  picture: PropTypes.string
});
