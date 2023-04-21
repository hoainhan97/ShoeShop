import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const {products} = this.props
    return (
        <div className='card'>
        <img src={products.image} alt="..." />
        <div className='card-body'>
            <p>{products.name}</p>
            <p>${products.price.toLocaleString()}</p>
            <button className='btn bg-dark text-bg-dark'>Xem sản phẩm <span><i class="fa-solid fa-cart-shopping"></i></span></button>
        </div>
      </div>
    )
  }
}
