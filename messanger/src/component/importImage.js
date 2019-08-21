import React from 'react'
import ReactDOM from 'react-dom'
import FileBase64 from 'react-file-base64'

class importImage extends React.Component {
  constructor () {
    super()
    this.state = {
      files: []
    }
  }

  // Callback~
  getFiles (files) {
    this.setState({ files: files })
  }

  render () {
    return (
      <FileBase64
        multiple
        onDone={this.getFiles.bind(this)} />
    )
  }
}

export default { importImage }
