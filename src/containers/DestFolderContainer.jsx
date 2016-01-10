import { ipcRenderer } from 'electron'
import { Component } from 'react'
import { connect } from 'react-redux'

import ChooseFolder from '../components/ChooseFolder'
import { increment } from '../actionCreators'
import store from '../store'
import { setDestFolder } from '../actionCreators'

ipcRenderer.on('dest-folder-chosen', function(event, arg) {
  store.dispatch(setDestFolder(arg))
});

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return {
    message: 'choose-dest-folder',
    value: state.destFolder
  }
}

export default connect(
  mapStateToProps
)(ChooseFolder)

// You can also pass an object instead of defining `mapDispatchToProps`:
// export default connect(mapStateToProps, CounterActionCreators)(Counter);

// Or you can pass `dispatch` down as a prop if you omit `mapDispatchToProps`:
// export default connect(mapStateToProps)(Counter);

// See more recipes in detailed connect() examples below.
