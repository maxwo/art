import { DISPLAY_GALLERIES } from '../actions';

const initialState = {
  galleryList: [],
  galleries: {},
  pictures: {},
  files: {},
}

export function galleryApp(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_GALLERIES:
      return Object.assign({}, state, {...action});
    default:
      return state;
  }
}
