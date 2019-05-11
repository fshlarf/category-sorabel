import React from 'react'
import Detail from './detailCategory'
import AddProduct from './addProduct'
import Cat from './category.scss'
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

function Category() {
  return (
    <div className="category">
      Hello from base project
    </div>
  )
}

export default RouteComponent
