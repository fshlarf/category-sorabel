import React from 'react'
import ProductDetail from './../components/ProductDetail'
import Header from './../components/Header'

function detailCategory(props) {
  return (
    <div>
      <Header/>
      <div className="root">
        <ProductDetail {...props}/>
      </div>
    </div>
  )
}

export default detailCategory