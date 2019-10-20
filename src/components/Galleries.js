import React, { Component } from 'react';
import GalleryList from './GalleryList';
import { connect } from 'react-redux'
import { fetchGalleries } from '../actions'

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
    galleryList: state.galleryList,
    galleries: state.galleries,
    files: state.files,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetch: () => {
      dispatch(fetchGalleries(ownProps.accessToken, ownProps.spaceId, ownProps.environment))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Galleries);
