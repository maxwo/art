import React, { Component } from 'react';
import GalleryList from './GalleryList';
import { connect } from 'react-redux'

class Slideshow extends Component {
  render() {
    return <GalleryList {...this.props} onClick={() => {}} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    slideshow: state
      .galleries[ownProps.gallery]
      .images
      .map(id => ({
        id,
        picture: state.files[state.galleries[id].coverImage.sys.id].file.url,
        ...state.galleries[id],
      })),
  }
}

export default connect(mapStateToProps)(Slideshow);
