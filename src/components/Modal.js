import React, { Component } from 'react'
import ModalScss from './scss/modal.scss'

export default class Modal extends Component {
  render() {
    return (
      <div >
        {
          this.props.shosModal === true ? ( 
            <div className="modal">  
              <div className="modal-content">
                <span className="close" onClick={this.props.closeModal}>&times;</span>
                <p>Apakah kamu ingin menghapus produk ini?</p>
                <div className="modal-content__btn">
                  <button className="btn btn-secondary">Tidak</button>
                  <button className="btn btn-primary" onClick={this.props.executeDelete}>Ya</button>
                </div>
              </div>
            </div>
          ) : ('')
        }
      </div>
    )
  }
}