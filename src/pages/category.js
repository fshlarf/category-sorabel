import React from 'react'
import CardProductCategory from './../components/CardProductCategory'
import Header from './../components/Header'

function Category() {
  return (
    <div>
      <Header
        title="Dress"
      />
      <div className="root">
        <CardProductCategory/>
      </div>
    </div>
  )
}

export default Category