import React, { useEffect } from "react";
import GalleryList from "./GalleryList";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchGalleries } from "../../actions";

const Galleries = props => {
  useEffect(props.fetch, []);
  const history = useHistory();
  return (
    <GalleryList
      {...props}
      onClick={gallery => history.push(`/gallery/${gallery.slug}`)}
    />
  );
};

const mapStateToProps = state => {
  return {
    galleries: state.galleryList.map(id => ({
      id,
      picture: state.files[state.galleries[id].coverImage.sys.id].file.url,
      ...state.galleries[id]
    }))
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
)(Galleries);
