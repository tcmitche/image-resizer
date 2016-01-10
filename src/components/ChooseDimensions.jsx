import React from 'react'
import { ipcRenderer } from 'electron'
import { Component } from 'react'

export default class ChooseDimensions extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <label>Max Height</label>
          <input ref="height" type="number" className="form-control" onChange={(e) => this.handleHeightChange(e)} value={this.props.maxHeight} />
        </div>
        <div className="form-group">
          <label>Max Width</label>
          <input ref="width" type="number" className="form-control" onChange={(e) => this.handleWidthChange(e)} value={this.props.maxWidth} />
        </div>
      </div>
    )
  }
  handleHeightChange(e) {
    const height = Number(e.target.value)
    this.props.onHeightChange(height)
  }
  handleWidthChange(e) {
    const width = Number(e.target.value)
    this.props.onWidthChange(width)
  }
}
