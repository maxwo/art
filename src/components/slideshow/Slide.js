import React from "react";
import HighResolutionPicture from "../core/HighResolutionPicture";
import { photoType } from "../../types";

const Slide = ({ slide, onClick }) => {
  return (
    <div className="slideshow__column__picture">
      <HighResolutionPicture
        key={slide.id}
        width={600}
        height={400}
        picture={slide}
        alt="alt"
      />
    </div>
  );
};

Slide.propTypes = {
  slide: photoType.isRequired
};

export default Slide;
