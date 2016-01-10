export const SET_SOURCE_FOLDER = 'SET_SOURCE_FOLDER';
export const SET_DEST_FOLDER = 'SET_DEST_FOLDER';
export const SET_MAX_HEIGHT = 'SET_MAX_HEIGHT';
export const SET_MAX_WIDTH = 'SET_MAX_WIDTH';

export function setSourceFolder(value) {
  return {
    type: SET_SOURCE_FOLDER,
    value: value
  };
}

export function setDestFolder(value) {
  return {
    type: SET_DEST_FOLDER,
    value: value
  };
}

export function setMaxHeight(value) {
  return {
    type: SET_MAX_HEIGHT,
    value: value
  }
}

export function setMaxWidth(value) {
  return {
    type: SET_MAX_WIDTH,
    value: value
  }
}
