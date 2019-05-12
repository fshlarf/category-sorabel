import React, { Component } from 'react'
import modalimage from './modal-image.scss'

export default class ModalImage extends Component {
  render() {
    return (
      <div className={modalimage}>
        { 
          this.props.show ?
          (<div className="modal-image modal">
            <span className="ic-close" onClick={this.props.closeImg}>&times;</span>
            <img className="modal-content" src={this.props.theImg} alt="Image Not Found"></img>
          </div>) : (<div></div>) 
        }
      </div>
    )
  }
}