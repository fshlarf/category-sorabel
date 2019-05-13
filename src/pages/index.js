import React from 'react'
import ProductDetail from './../components/ProductDetail'
import Header from './../components/Header'
import NewProduct from './../components/NewestProduct'
import ListCategory from './../components/CardListCategory'
import CardProduct from './../components/CardProductCategory'

function detailCategory(props) {
  return (
    <div>
      <Header/>
      <div>
        <NewProduct/>
        <ListCategory/>
        <div className="index">
          <p>Rekomendasi Produk</p>
          <div className="index-product">
            <CardProduct {...props}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default detailCategory