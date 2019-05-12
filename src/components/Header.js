import React, { Component } from 'react'
import HeaderScss from './header.scss'

export default class Header extends Component {
  toPrevious = () => {
    window.history.back()
  }
  render() {
    return (
      <div className="header">
        <div className="header-container">
          <div className="header-container__content">
            <div className="header-container__content-back" onClick={() => this.toPrevious()}>
              <img src={'https://salestock-public-prod.freetls.fastly.net/balok-assets/assets/img/icons/icon-arrow-left-greyDark-de6db57432bb3f61b5e30f988b59eef8.png'}></img>
            </div>
            <div className="header-container__content-title">{this.props.title}</div>
            <div className="header-container__content-right">
              <span><img src={'https://salestock-public-prod.freetls.fastly.net/balok-assets/assets/img/icons/icon-search-greyDark-75485234b11747c9cab05016d0c0c4be.png'}/></span>
              <span><img src={'https://salestock-public-prod.freetls.fastly.net/balok-assets/assets/img/icons/icon-heart-greyDark-74fa2bfb60cf3c250b268fc886ef3144.png'}/></span>
              <span><img src={'https://salestock-public-prod.freetls.fastly.net/balok-assets/assets/img/icons/icon-cart-greyDark-8465cf6f65a64e2a8dbf6100d9f705d3.png'}/></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}