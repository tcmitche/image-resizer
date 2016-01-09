import { Component } from 'react'
import { connect } from 'react-redux'

import SourceFolder from '../components/SourceFolder'
import { increment } from '../actionCreators'

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return {
    value: state.sourceFolder
  }
}

export default connect(
  mapStateToProps
)(SourceFolder)

// You can also pass an object instead of defining `mapDispatchToProps`:
// export default connect(mapStateToProps, CounterActionCreators)(Counter);

// Or you can pass `dispatch` down as a prop if you omit `mapDispatchToProps`:
// export default connect(mapStateToProps)(Counter);

// See more recipes in detailed connect() examples below.
