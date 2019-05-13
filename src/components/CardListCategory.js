import React, { Component } from 'react'
import listCategoryScss from './scss/card-list-category.scss'

export default class ListCategory extends Component {
  openCategory = (category) => {
    if (category === 'mini') {
      let url = '/category/mini%20dress'
      window.location = url
    } else if (category === 'midi') {
      let url = '/category/midi%20dress'
      window.location = url
    } else if (category === 'maxi') {
      let url = '/category/maxi%20dress'
      window.location = url
    }
  }

  render() {
    return (
      <div className="list-category">
        <div className="list-category__header">
          <div className="list-category__header-title">
            <div>Kategori</div>
          </div>
        </div>
        <div className="list-category__container">
          <div className="list-category__container-content">
            <div className="category" onClick={() => this.openCategory('mini')}>
              <img src={'https://imager-next.freetls.fastly.net/images/resized/480/assets-category-list/wanita_dress_minidress.jpg'}/>
            </div>
            <div>MINI DRESS</div>
          </div>
          <div className="list-category__container-content">
            <div className="category" onClick={() => this.openCategory('midi')}>
              <img src={'https://imager-next.freetls.fastly.net/images/resized/480/assets-category-list/wanita_dress_mididress.jpg'}/>
            </div>
            <div>MIDI DRESS</div>
          </div>
          <div className="list-category__container-content">
            <div className="category" onClick={() => this.openCategory('maxi')}>
              <img src={'https://imager-next.freetls.fastly.net/images/resized/480/assets-category-list/wanita_dress_maxidress.jpg'}/>
            </div>
            <div>MAXI DRESS</div>
          </div>
        </div>
      </div>
    )
  }
}