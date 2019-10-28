import React from "react";
import PropTypes from "prop-types";
import { photoType } from "../../types";

const HighResolutionPicture = ({
  picture,
  alt,
  width,
  height,
  quality,
  onClick
}) => {
  const realWidth = width * 2;
  const realHeight = height * 2;
  const progressiveJPEGPicture = `${picture.url}?fm=jpg&fl=progressive&w=${realWidth}&h=${realHeight}&q=${quality}`;
  console.log(progressiveJPEGPicture);
  return (
    <img src={progressiveJPEGPicture} alt={alt} width={width} height={height} />
  );
};

HighResolutionPicture.propTypes = {
  onClick: PropTypes.func,
  picture: photoType.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  quality: PropTypes.number
};

HighResolutionPicture.defaultProps = {
  onClick: () => {},
  quality: 100
};

export default HighResolutionPicture;
