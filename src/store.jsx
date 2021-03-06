import { createStore } from 'redux'
import { SET_SOURCE_FOLDER, SET_DEST_FOLDER, SET_MAX_HEIGHT, SET_MAX_WIDTH } from './actionCreators'
import _ from 'lodash'

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your project.
 */
let initialState = {
  sourceFolder: null,
  destFolder: null,
  maxHeight: 200,
  maxWidth: 400
}

function counter(state = initialState, action) {
  switch (action.type) {
  case SET_SOURCE_FOLDER:
    return _.assign({}, state, { sourceFolder: action.value })
  case SET_DEST_FOLDER:
    return _.assign({}, state, { destFolder: action.value })
  case SET_MAX_HEIGHT:
    return _.assign({}, state, { maxHeight: action.value })
  case SET_MAX_WIDTH:
    return _.assign({}, state, { maxWidth: action.value })
  default:
    return state
  }
}


// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export default createStore(counter)
