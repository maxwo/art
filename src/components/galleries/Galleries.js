import React, { Component } from 'react';
import GalleryList from './GalleryList';
import { connect } from 'react-redux'
import { fetchGalleries } from '../../actions'

class Galleries extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return <GalleryList {...this.props} onClick={() => {}} />;
  }
}

const mapStateToProps = state => {
  return {
    galleries: state
      .galleryList
      .map(id => ({
        id,
        picture: state.files[state.galleries[id].coverImage.sys.id].file.url,
        ...state.galleries[id],
      })),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetch: () => {
      dispatch(fetchGalleries(ownProps.deliveryToken, ownProps.spaceId, ownProps.environment))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Galleries);
