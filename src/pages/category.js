import React from 'react'
import CardProductCategory from './../components/CardProductCategory'
import Header from './../components/Header'

function Category(props) {
  return (
    <div>
      <Header
        title="Dress"
      />
      <div className="root">
        <CardProductCategory {...props}/>
      </div>
    </div>
  )
}

export default Category