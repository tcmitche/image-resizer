'use strict';
import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import SourceFolder from './containers/SourceFolderContainer'
import DestFolder from './containers/DestFolderContainer'
import ChooseDimensions from './containers/ChooseDimensionsContainer'
import store from './store'
import { ipcRenderer } from 'electron'

window.store = store
function resize() {
  ipcRenderer.send('resize', store.getState())
}

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Image Resizr</h1>
        <SourceFolder label="Select the directory containing the images." />
        <DestFolder label="Select the directory to put the resized images in." />
        <ChooseDimensions />
        <button className="btn btn-primary btn-lg btn-block" onClick={resize}>Resize!</button>
      </div>
    )
  }
})

const targetEl = document.getElementById('mount')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  targetEl
)
