import React from 'react'
import { ipcRenderer } from 'electron'
import { Component } from 'react'

export default class ChooseFolder extends Component {
  sendChooseFolderMessage() {
    ipcRenderer.send('open-folder-dialog')
  }
  render() {
    return (
      <button onClick={this.sendChooseFolderMessage}>
        Choose a folder
      </button>
    )
  }
}
