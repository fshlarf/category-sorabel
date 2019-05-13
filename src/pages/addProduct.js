import React, { Component } from 'react'
import axios from 'axios'
import { tsConstructorType } from '@babel/types';

export default class addProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      category: '',
      price: '',
      material: '',
      likes: '',
      sizeChart: '',
      urlImage: [],
      urlTemp: [],
      detailTemp: '',
      detail: [],
      colorTemp: '',
      color: [],
      sizeTemp: '',
      size: [],
      canUseFirst: '',
      popularProduct: ''
    }
  }
  handleChangeTitle = (e) => {this.setState({title: e.target.value})}
  handleChangeCategory = (e) => {this.setState({category: e.target.value})}
  handleChangePrice = (e) => {this.setState({price: e.target.value})}
  handleChangeMaterial = (e) => {this.setState({material: e.target.value})}
  handleChangeLikes = (e) => {this.setState({likes: e.target.value})}
  handleChangeSizechart = (e) => {this.setState({sizeChart: e.target.value})}
  handleChangeEachUrl = (e) => {this.setState({urlTemp: [...this.state.urlImage, e.target.value]})}
  handleChangeDetail = (e) => {this.setState({detailTemp: e.target.value})}
  handleChangeColor = (e) => {this.setState({colorTemp: e.target.value})}
  handleChangeSize = (e) => {this.setState({sizeTemp: e.target.value})}
  handelChangeUseFirstTrue = (e) => {this.setState({canUseFirst: true})}
  handelChangeUseFirstFalse = (e) => {this.setState({canUseFirst: false})}
  handelChangePopularTrue = (e) => {this.setState({popularProduct: true})}
  handelChangePopularFalse = (e) => {this.setState({popularProduct: false})}


  submitData = (e) => {
    e.preventDefault()
    const { title, category, price, material, likes, sizeChart, urlImage, detail, color, size, canUseFirst, popularProduct } = this.state
    const isEmptyField = title === '' || category === ''  || price === ''  || material === ''  || likes === ''  || sizeChart === ''  || urlImage === ''  || detail === ''  || color === ''  || size === ''  || canUseFirst === ''  || popularProduct === ''  
    if (isEmptyField) {
      alert('Harap lengkapi data yang anda input')
    } else {
      this.postData()
    }
  }
  postData = () => {
    axios.post('http://localhost:1000/products', {
      title: this.state.title,
      category: this.state.category,
      price: this.state.price,
      material: this.state.material,
      likes: this.state.likes,
      sizeChart: this.state.sizeChart,
      urlImage: this.state.urlImage,
      detail: this.state.detail,
      color: this.state.color,
      size: this.state.size,
      canUseFirst: this.state.canUseFirst,
      popularProduct: this.state.popularProduct
    })
    .then(res => {
      alert('Data Berhasil Ditambahkan')
      window.location.reload()
    })
    .catch(err => {
      console.log(err);
    })
  }

  addUrlImage = (e) => {
    e.preventDefault()
    if (this.state.urlTemp) {
      this.setState({
        urlImage: this.state.urlTemp
      })
    }
  }
  addDetail = (e) => {
    e.preventDefault()
    if (this.state.detailTemp) {
      this.setState({
        detail: [...this.state.detail, this.state.detailTemp]
      })
    }
  }
  addColor = (e) => {
    e.preventDefault()
    if (this.state.colorTemp) {
      this.setState({
        color: [...this.state.color, this.state.colorTemp]
      })
    }
  }
  addSize = (e) => {
    e.preventDefault()
    if (this.state.sizeTemp) {
      this.setState({
        size: [...this.state.size, this.state.sizeTemp]
      })
    }
  }

  render() {
    return (
      <div className="rootadd">
        <div className="add-product">
          <h3>Tambah Produk</h3>
          <form>
            <div className="form-group">
              <label>Nama Product</label>
              <input type="text" className="form-control" name="name" placeholder="Contoh Dress Cantik" onChange={this.handleChangeTitle}/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label >Kategori</label>
              <input type="text" className="form-control" placeholder="Contoh Dress" onChange={this.handleChangeCategory}/>
            </div>
            <div className="form-group">
              <label>Price</label>
              <input type="number" className="form-control" placeholder="Contoh 200000" onChange={this.handleChangePrice}/>
            </div>
            <div className="form-check">
              <label className="add-product__label" >Aktifkan fitur Bisa Coba Dulu</label>
              <input className="form-check-input" type="radio" name="inputRadio" id="yes" value={true} onChange={this.handelChangeUseFirstTrue}/>
              <label className="form-check-label" >Iya </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="inputRadio" id="no" value={false} onChange={this.handelChangeUseFirstFalse}/>
              <label className="form-check-label">Tidak</label>
            </div>
            <div className="form-group">
              <label>Tambah Url Gambar Produk</label>
              <input type="text" className="form-control" name="name" placeholder="contoh: http://google.com/images1" onChange={this.handleChangeEachUrl}/>
              {this.state.urlImage.map((url, i) => (
                <div className="add-product__url" key={i}>{url}</div>
              ))}
              <div className="add-product__btn">
                <button className="btn btn-secondary" onClick={this.addUrlImage}>Simpan Url</button>
              </div>
              <small id="emailHelp" className="form-text text-muted">Kamu dapat mengupload data gambar dengan memasukkan url gambar tersebut</small>
            </div>
            <div className="form-group">
              <label>Warna Produk</label>
              <input type="text" className="form-control" name="name" placeholder="contoh: Merah" onChange={this.handleChangeColor}/>
              {this.state.color.map((col, i) => (
                <div className="add-product__url">{col}</div>
              ))}
              <div className="add-product__btn">
                <button className="btn btn-secondary" onClick={this.addColor}>Tambah Warna</button>
              </div>
            </div>
            <div className="form-group">
              <label>Ukuran Produk</label>
              <input type="text" className="form-control" name="name" placeholder="contoh: M, L, XL" onChange={this.handleChangeSize}/>
              {this.state.size.map((size, i) => (
                <div className="add-product__url">{size}</div>
              ))}
              <div className="add-product__btn">
                <button className="btn btn-secondary" onClick={this.addSize}>Tambah Ukuran</button>
              </div>
            </div>
            <div className="form-group">
              <label >Bahan</label>
              <input type="text" className="form-control" placeholder="Contoh Katun" onChange={this.handleChangeMaterial}/>
            </div>
            <div className="form-group">
              <label>Jumlah Likes</label>
              <input type="number" className="form-control" placeholder="Contoh 500" onChange={this.handleChangeLikes}/>
            </div>
            <div className="form-group">
              <label>Tambah Detail Tentang Produk</label>
              <input type="text" className="form-control" name="name" placeholder="contoh: resleting Belakang" onChange={this.handleChangeDetail}/>
              {this.state.detail.map((det, i) => (
                <div className="add-product__url">{det}</div>
              ))}
              <div className="add-product__btn">
                <button className="btn btn-secondary" onClick={this.addDetail}>Tambah Detail</button>
              </div>
            </div>
            <div className="form-group">
              <label >Keterangan Ukuran</label>
              <input type="text" className="form-control" placeholder="Jelaskan keterangan ukuran" onChange={this.handleChangeSizechart}/>
            </div>
            <div className="form-check">
              <label className="add-product__label" >Apakah Produk Ini termasuk Produk Popular</label>
              <input className="form-check-input" type="radio" name="inputRadio" id="yes" value={true} onChange={this.handelChangePopularTrue}/>
              <label className="form-check-label" >Iya </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="inputRadio" id="no" value={false} onChange={this.handelChangePopularFalse}/>
              <label className="form-check-label">Tidak</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.submitData}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
