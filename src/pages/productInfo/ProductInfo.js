import React from 'react'
import './productInfo.css'
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData'
import {FileUpload} from '@mui/icons-material'


export default function ProductInfo() {
    return (
        <div className='productInfo'>
            <div className='productHeads'>
                <h2 className='productTitle'>
                    Product Info
                </h2>
                <Link to="/newProduct">
                    <button className='productAddBtn'>
                        Add Product
                    </button>
                </Link>
            </div>

            <div className='productTop'>
                <div className='productChart'>
                    <Chart data={productData} dataKey='Sales' grid title='Sales Information' />
                </div>
                <div className='productDet'>
                    <h3 className='productDetTitle'>Product Details</h3>
                    <div className='productDetHead'>
                        <img src='https://via.placeholder.com/50' className='productImg' alt='' />
                        <span className='productName'>IPhone 14</span>
                    </div>
                    <div className='productDetBtm'>
                        <p className='productBtmInfo'>id : 1</p>
                        <p className='productBtmInfo'>sales : 1123</p>
                        <p className='productBtmInfo'>active : yes</p>
                        <p className='productBtmInfo'>in stock : yes</p>
                    </div>


                </div>
            </div>


            <div className='productBtm'>
                <div className='productBtmLeft'>
                    <form className='productBtmForm'>
                        <div className='productFormItem'>
                            <label>Product Name</label>
                            <input type='text' placeholder='IPhone 14' />
                        </div>
                        <div className='productFormItem'>
                            <label>Active</label>
                            <select className='ProductActive' name='active' id='active'>
                                <option value='yes'>Yes</option>
                                <option value='no'>No</option>
                            </select>
                        </div>
                        <div className='productFormItem'>
                            <label>In Stock</label>
                            <select className='ProductStock' name='stock' id='stock'>
                                <option value='yes'>Yes</option>
                                <option value='no'>No</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div className='productBtmRight'>
                    <div className='productRightTop'>
                        <img className='productRightImg' src='https://via.placeholder.com/150' alt='' />
                        <label htmlFor='file'>
                            <FileUpload className='productFile' />
                        </label>
                        <input type='file' id='file' style={{ display: 'none' }} />
                    </div>

                    <div className='productRightBtm'>
                        <button className='productRightBtn'>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
