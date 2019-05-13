import React from 'react'
import Detail from './detailCategory'
import Category from './category'
import AddProduct from './addProduct'
import Index from './index'
import NewProductDetail from './newPorductDetail'
import Main from './main.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function RouteComponent() {
  return (
    <Router>
      <Route exact path="/" component={Index} />
      <Route exact path="/category/:category" component={Category} />
      <Route path="/category/detail/:id" component={Detail} />
      <Route path="/new/detail/:id" component={NewProductDetail} />
      <Route path="/add" component={AddProduct} />
    </Router>
  )
}

export default RouteComponent
