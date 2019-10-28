import { SAVE_GALLERIES } from "../actions";

const initialState = {
  galleryList: [],
  galleries: {},
  pictures: {},
  files: {}
};

export function galleryApp(state = initialState, action) {
  switch (action.type) {
    case SAVE_GALLERIES:
      return Object.assign({}, state, { ...action });
    default:
      return state;
  }
}
