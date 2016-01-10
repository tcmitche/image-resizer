import React from 'react'
import { ipcRenderer } from 'electron'
import { Component } from 'react'

function sendChooseFolderMessage(message) {
  return () => ipcRenderer.send(message)
}

export default function SourceFolder(props) {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <div className="input-group">
        <span className="input-group-btn">
          <button className="btn btn-default" onClick={sendChooseFolderMessage(props.message)}>
            Choose a folder
          </button>
        </span>
        <input className="form-control" value={props.value} disabled />
      </div>
    </div>
  )
}

