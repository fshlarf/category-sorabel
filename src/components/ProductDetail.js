import React, { Component } from 'react'
import axios from 'axios'
import detailProd from './scss/product-detail.scss'
import ModalImage from './ModalImage'
import { formatMoney } from './../common/currency'

export default class productDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: [],
      altImg: 'Image Not Found',
      arrayImg: [],
      arrayColor: [],
      arraySize: [],
      arrayDetail: [],
      mainImg: '',
      id: '',
      price: ''
    }
  }
  componentDidMount() {
    this.getDataProduct()
  }
  getDataProduct = () => {
    // let productId = window.location.pathname.match(/detail\/((.*)+)/)
    const { id } = this.props.match.params
    axios.get('http://localhost:1000/products/' + id, {
      crossDomain: true
    })
    .then(res => {
      this.setState({
        product: res.data,
        mainImg: res.data.urlImage[0],
        arrayImg: res.data.urlImage,
        arrayColor: res.data.color,
        arraySize: res.data.size,
        arrayDetail: res.data.detail,
        openImage: '',
        price: res.data.price
      })
    })
    .catch(err => {
      console.log(err)
    })
  } 
  openTheImage = () => {
    this.setState({
      openImage: 'open'
    })
  }
  changeImage = (image) => {
    this.setState({
      mainImg: image
    })
  }
  closeModal = () => {
    this.setState({
      openImage: ''
    })
  }
  render() {
    return (
      <div>
        <ModalImage
          show={this.state.openImage}
          theImg={this.state.mainImg}
          closeImg={() => this.closeModal()}
        />
        <div className="card-product">
          <div className="card-product__img">
          {this.state.mainImg ? (<img src={this.state.mainImg} alt={this.state.altImg} onClick={() => this.openTheImage()}/>) : ('')}
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
              {formatMoney(this.state.price)} 
              {
                this.state.product.canUseFirst ? 
                <span><img src={'https://salestock-public-prod.freetls.fastly.net/balok-assets/assets/img/icons/icon-cdbb-green-1bd5de1523af79f96b6da5f5339d22b8.png'}/>Bisa Coba Dulu</span> : <span></span>
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
                  <button key={i}>{color}</button>
                )
              })}
            </div>
            <div className="detail__colorSize-label">Pilih ukuran yang tersedia</div>
            <div className="detail__colorSize-btn">
              {this.state.arraySize.map((size, i) => {
                return (
                  <button key={i}>{size}</button>
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
            {this.state.arrayDetail.map((detail, i) => {
              return (
                <div key={i}>{detail}</div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}