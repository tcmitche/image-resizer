import React from 'react'
import { ipcRenderer } from 'electron'
import { Component } from 'react'

function sendChooseFolderMessage() {
  ipcRenderer.send('open-folder-dialog')
}

export default function SourceFolder(props) {
  return (
    <div className="input-group">
      <span className="input-group-btn">
        <button className="btn btn-default" onClick={sendChooseFolderMessage}>
          Choose a folder
        </button>
      </span>
      <input className="form-control" value={props.value} disabled />
    </div>
  )
}

