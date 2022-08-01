import React from 'react'
import './newProduct.css'

export default function NewProduct() {
  return (
    <div className='newProduct'>
      <h2 className='newProductTitle'>New Product</h2>

      <form className='newProductForm'>
        <div className='newProductItem'>
          <label>Image</label>
          <input type='file' id='file' />
        </div>
        <div className='newProductItem'>
          <label>Product Name</label>
          <input type='text' placeholder='Product Name' />
        </div>
        <div className='newProductItem'>
          <label>Stock</label>
          <input type='number' placeholder='Product Stock' />
        </div>
        <div className='newProductItem'>
          <label>Active</label>
          <select name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>

        <button className='newProductBtn'>Add</button>
      </form>
    </div>
  )
}
