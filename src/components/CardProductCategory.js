import React, { Component } from 'react'
import axios from 'axios'
// import API from './../config/Http'
import cardProduct from './card-product.scss'

export default class cardProducrCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      altImg: 'Image Not Found'
    }
  }
  componentDidMount() {
    this.getDataProduct()
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
  render() {
    return (
      <div className={cardProduct}>
       {this.state.products.map((product, i) => (
         <div className="card-product" key={i}>
          <div className="card-product__img" >
            <img src={product.urlImage[0]} alt={this.state.altImg}/>
            {
              product.popularProduct ? 
              (<div className="card-product__img-label">
                <div>Produk Terlaris</div>
                </div>) :
              (<div></div>) 
            }
          </div>
          <div className="card-product__header">
            <div className="card-product__header-title">{product.title}</div>
            <label className="card-product__header-label">L, XL, M</label>
            <span>
              <img className="ic-like" src={'https://salestock-public-prod.freetls.fastly.net/balok-assets/assets/img/icons/icon-heart-grey-0a895ac5bdf1f98aa48d5f85efc7679d.png'} alt={this.state.altImg}/>
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
