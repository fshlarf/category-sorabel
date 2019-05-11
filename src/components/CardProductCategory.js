import React, { Component } from 'react'
import axios from 'axios'
import API from './../config/Http'
import cardProduct from './card-product.scss'
import { transform } from '@babel/core';

export default class cardProducrCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }
  
  getDataProduct = () => {
    axios.get('http://localhost:1000/products', {
      crossDomain: true
    })
    .then(res => {
      this.setState({
        products: res.data
      })
      console.log(this.state.products)
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.getDataProduct()
  }

  render() {
    return (
      <div>
       {this.state.products.map((product, i) => (
         <div className="card-product" key={i}>
          <img className="card-product__img" src={product.urlImage[0]}/>
          {
            product.popularProduct ? 
            (<label className="card-product__label" >Produk Terlaris</label>) :
            (<div></div>) 
          }
          <div className="card-product__header">
            <div className="card-product__header-title">{product.title}</div>
            <label className="card-product__header-label">L, XL, M</label>
            <span>
              <img className="ic-like" src={'https://salestock-public-prod.freetls.fastly.net/balok-assets/assets/img/icons/icon-heart-grey-0a895ac5bdf1f98aa48d5f85efc7679d.png'} />
              <button className="btn btn-primary" >BELI</button>
            </span>
            <div className="card-product__header-price">{product.price}</div>
          </div>
          
         </div>
       ))}

      </div>
        
        
    )
  }
}
