import React, { Component } from 'react'
import Main from './main.scss'
import Modal from './../components/Modal'
import axios from 'axios'

export default class ListAllProducts extends Component {

  constructor(props) {
    super(props)
    this.state = {
      product: [],
      altImg: 'Image Not Found',
      isShow: false,
      id: ''
    }
  }
  componentDidMount() {
    this.getDataProduct()
  }
  getDataProduct = () => {
    let url = 'http://localhost:1000/products/'
    axios.get(url, {
      crossDomain: true
    })
    .then(res => {
      this.setState({
        product: res.data,
      })
    })
    .catch(err => {
      console.log(err)
    })
  }   
  deleteProduct = (prod) => {
    this.setState({
      isShow: true,
      id: prod.id
    })
  }
  exeDelete = () => {
    let url = 'http://localhost:1000/products/'
    axios.delete(url + this.state.id, {
      crossDomain: true
    })
    .then(res => {
      window.location.reload()
    })
    .catch(err => {
      console.log(err)
    })
  }
  closeModal = () => {
    this.setState({
      isShow: false
    })
  }
  render() {
    return(
      <div>
        <Modal
          shosModal={this.state.isShow}
          closeModal={this.closeModal}
          executeDelete={this.exeDelete}
        />
        <div className="rootadd list-product">
          <h4>Daftar Produk</h4>
          <div className="list-product__header">
            <span className="list-product__header-no">No.</span>
            <span className="list-product__header-title">Nama Produk</span>
            <span className="list-product__header-id">Id</span>
          </div>
          <div>
            {
              this.state.product.map((prod, i) =>{
                return (
                  <div className="list-product__content" key={i}>
                    <div className="list-product__content-no">{i + 1 + '.'}</div>
                    <span className="list-product__content-title">{prod.title}</span>
                    <span className="list-product__content-id">{prod.id}</span>
                    <span className="list-product__content-btn">
                      <button className="btn btn-primary btn-sm" onClick={() => this.deleteProduct(prod)}>Delete</button>
                    </span>                   
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    ) 
  }
}

