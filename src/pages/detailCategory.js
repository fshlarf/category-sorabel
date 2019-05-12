import React from 'react'
import ProductDetail from './../components/ProductDetail'
import Header from './../components/Header'

function detailCategory() {
  return (
    <div>
      <Header/>
      <div className="root">
        <ProductDetail/>
      </div>
    </div>
  )
}

export default detailCategory