import React, { useEffect } from "react";
import { connect } from "react-redux";
import Slides from "./Slides";
import { fetchGalleries } from "../../actions";

const Slideshow = ({ slideshow, gallery, fetch }) => {
  useEffect(fetch, []);
  return <Slides slideshow={slideshow} gallery={gallery} />;
};

const createSlide = (id, state) => {
  const picture = state.pictures[id];
  const pictureFile = state.files[picture.photo.sys.id].file;
  return {
    id,
    ...picture,
    ...pictureFile
  };
};

const mapStateToProps = (state, ownProps) => {
  const gallery = Object.values(state.galleries).find(
    gallery => gallery.slug === ownProps.gallerySlug
  );
  if (typeof gallery !== "undefined") {
    gallery.coverPicture = state.files[gallery.coverImage.sys.id].file;
  }
  const slideshow =
    typeof gallery !== "undefined"
      ? gallery.images.map(reference => createSlide(reference.sys.id, state))
      : [];
  return {
    gallery,
    slideshow
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetch: () => {
      dispatch(
        fetchGalleries(
          ownProps.deliveryToken,
          ownProps.spaceId,
          ownProps.environment
        )
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slideshow);
