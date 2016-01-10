import { ipcRenderer } from 'electron'
import { Component } from 'react'
import { connect } from 'react-redux'

import ChooseDimensions from '../components/ChooseDimensions'
import store from '../store'
import { setMaxHeight, setMaxWidth } from '../actionCreators'

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return {
    maxHeight: state.maxHeight,
    maxWidth: state.maxWidth,
  }
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {
    onHeightChange: (height) => dispatch(setMaxHeight(height)),
    onWidthChange: (width) => dispatch(setMaxWidth(width))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseDimensions)

// You can also pass an object instead of defining `mapDispatchToProps`:
// export default connect(mapStateToProps, CounterActionCreators)(Counter);

// Or you can pass `dispatch` down as a prop if you omit `mapDispatchToProps`:
// export default connect(mapStateToProps)(Counter);

// See more recipes in detailed connect() examples below.
