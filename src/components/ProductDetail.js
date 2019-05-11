import React, { Component } from 'react'
import axios from 'axios'
import detailProd from './product-detail.scss'
// import API from './../config/Http'

export default class productDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: [],
      altImg: 'Image Not Found',
      arrayImg: [],
      mainImg: ''
    }
  }
  componentDidMount() {
    this.getDataProduct()
  }
  getDataProduct = () => {
    axios.get('http://localhost:1000/products/1', {
      crossDomain: true
    })
    .then(res => {
      this.setState({
        product: res.data,
        mainImg: res.data.urlImage[0],
        arrayImg: res.data.urlImage
      })
      console.log(this.state.arrayImg);
      
    })
    .catch(err => {
      console.log(err)
    })
  } 

  changeImage(image) {
    this.setState({
      mainImg: image
    })
  }

  render() {
    return (
      <div>
        <div className="card-product">
          <div className="card-product__img">
          <img src={this.state.mainImg} alt={this.state.altImg}/>
            {
              this.state.product.popularProduct ? 
              (<div className="card-product__img-label">
                <div>Produk Terlaris</div>
                </div>) :
              (<div></div>) 
            }
          </div>
          <div className="mini-img">
            {this.state.arrayImg.map((image, i) => {
              return (
                <div className="mini-img__content" key={i} >
                  <img src={image} alt={this.state.altImg} onClick={() => this.changeImage(image)}/>
                </div>
              )
            })}
          </div>
          <div className="detail__title">
            <div className="detail__title-name">{this.state.product.title}</div>
          </div>
        </div>
      </div>
    )
  }
}