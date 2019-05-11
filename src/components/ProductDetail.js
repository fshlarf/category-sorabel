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
      arrayColor: [],
      arraySize: [],
      mainImg: ''
    }
  }
  componentDidMount() {
    this.getDataProduct()
  }
  getDataProduct = () => {
    axios.get('http://localhost:1000/products/2', {
      crossDomain: true
    })
    .then(res => {
      this.setState({
        product: res.data,
        mainImg: res.data.urlImage[0],
        arrayImg: res.data.urlImage,
        arrayColor: res.data.color,
        arraySize: res.data.size

      })
      console.log(this.state.arraySize);
      
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
            <div className="detail__title-price">
              {this.state.product.price} 
              {
                this.state.product.canUseFirst ? 
                <span>Bisa Coba Dulu</span> : <span></span>
              }
            </div>
          </div>
          <div className="detail__material">
            <div>BAHAN UTAMA<p>{this.state.product.material}</p></div>
          </div>
          <div className="detail__colorSize">
            <div className="detail__colorSize-label">Pilih warna yang tersedia</div>
            <div className="detail__colorSize-btn">
              {this.state.arrayColor.map((color, i) => {
                return (
                  <button>{color}</button>
                )
              })}
            </div>
            <div className="detail__colorSize-label">Pilih ukuran yang tersedia</div>
            <div className="detail__colorSize-btn">
              {this.state.arraySize.map((size, i) => {
                return (
                  <button>{size}</button>
                )
              })}
            </div>
          </div>
          <div className="detail__btn">
            <div className="detail__btn-labelLikes">{this.state.product.likes} kali disimpan</div>
            <div className="detail__btn-container">
              <button className="detail__btn-container--save btn btn-secondary btn-lg">SIMPAN</button>
              <button className="detail__btn-container--buy btn btn-primary btn-lg">BELI SEKARANG</button>
            </div>
          </div>
          <div className="detail__more">
            Detail
            <div>{this.state.product.detail}</div>
          </div>
        </div>
      </div>
    )
  }
}