import React from 'react'
import Detail from './detailCategory'
import Category from './category'
import AddProduct from './addProduct'
import Main from './main.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function RouteComponent() {
  return (
    <Router>
      <Route exact path="/" component={Category} />
      <Route path="/detail" component={Detail} />
      <Route path="/add" component={AddProduct} />
    </Router>
  )
}

export default RouteComponent
