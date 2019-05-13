import React, { Component } from 'react'
import axios from 'axios'
import { formatMoney } from './../common/currency'
import newProductCss from './scss/new-product.scss'

export default class NewProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: [],
      altImg: 'Image Not Found',
      arrayImg1: [],
      arrayImg2: [],
      product1: {},
      product2: {},
      price1: '',
      price2: ''
    }
  }
  getDataProduct = () => {
    axios.get('http://localhost:1000/newestProducts', {
      crossDomain: true
    })
    .then(res => {
      this.setState({
        product: res.data,
        product1: res.data[0],
        product2: res.data[1],
        arrayImg1: res.data[0].urlImage,
        arrayImg2: res.data[1].urlImage,    
        price1: res.data[0].price,
        price2: res.data[1].price,
      })
    })
    .catch(err => {
      console.log(err)
    })
  } 

  componentDidMount() {
    this.getDataProduct()
  }

  openProduct1 = () => {
    let url = '/new/detail/' + this.state.product1.id
    window.location = url
  }
  openProduct2 = () => {
    let url = '/new/detail/' + this.state.product2.id
    window.location = url
  }
  
  render() {
    return (
      <div className="new-product">
        <div className="new-product__header">
          <div className="new-product__header-title">
            <div>
              Terbaru
            </div>
          </div>
          <div className="new-product__header-link">
            <a>LIHAT SEMUA ></a>
          </div>      
        </div>
        <div className="new-product__content">
          <div className="new-product__content-left">
            <a className="link">
              <img className="link-img" src={this.state.arrayImg1[0]} onClick={this.openProduct1}/>
              <div className="link-container">
                <div className="link-container__title">
                  <div onClick={this.openProduct1}>
                    {this.state.product1.title}
                  </div>
                  <div className="link-container__title-price">{formatMoney(this.state.price1)}</div>
                </div>
                <div className="link-container__save">
                  <img src="https://salestock-public-prod.freetls.fastly.net/balok-assets/assets/img/icons/icon-heart-grey-0a895ac5bdf1f98aa48d5f85efc7679d.png"/>
                </div>
              </div>
            </a>
          </div>
          <div className="new-product__content-right">
            <a className="link">
              <img className="link-img" src={this.state.arrayImg2[0]} onClick={this.openProduct2}/>
              <div className="link-container">
                <div className="link-container__title">
                  <div onClick={this.openProduct2}>
                    {this.state.product2.title}
                  </div>
                  <div className="link-container__title-price">{formatMoney(this.state.price2)}</div>
                </div>
                <div className="link-container__save">
                  <img src="https://salestock-public-prod.freetls.fastly.net/balok-assets/assets/img/icons/icon-heart-grey-0a895ac5bdf1f98aa48d5f85efc7679d.png"/>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}