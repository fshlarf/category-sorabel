import React from 'react'
import Detail from './detailCategory'
import Category from './category'
import AddProduct from './addProduct'
import Main from './main.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function RouteComponent() {
  return (
    <Router>
      {/* <Route exact="/category" component={Index} /> */}
      <Route exact path="/category" component={Category} />
      <Route path="/category/detail/:id" component={Detail} />
      <Route path="/add" component={AddProduct} />
    </Router>
  )
}

export default RouteComponent
