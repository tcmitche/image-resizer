'use strict';
import { ipcRenderer } from 'electron'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import SourceFolder from './containers/SourceFolderContainer'
import store from './store'
import { setStoreFolder } from './actionCreators'

ipcRenderer.on('folder-chosen', function(event, arg) {
  store.dispatch(setStoreFolder(arg[0]))
});

store.subscribe(() => {
    console.log('loggin state')
    console.log(store.getState())
  }
)

var App = React.createClass({
  getInitialState: function() {
    return store.getState();
  },
  handleChange: function() {
    console.log('handleChange', store.getState())
    this.setState(store.getState());
  },
  render: function() {
    return (
      <div>
        <SourceFolder />
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
