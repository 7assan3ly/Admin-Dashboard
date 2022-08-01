import React, { useState } from 'react'
import './products.css'
import { DataGrid } from '@mui/x-data-grid';
import { Info, Delete } from '@mui/icons-material';
import { productRows } from '../../dummyData';
import {Link} from 'react-router-dom'

export default function Products() {

    const [data, setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    // Products Page "Columns Of Table"
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params => {
                return (
                    <div className='ProductItem'>
                        <img src='https://via.placeholder.com/32' className='productItemImg' alt='' />
                        {params.row.product}
                    </div>
                )
            })
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'price', headerName: 'Price', width: 200 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params => {
                return (
                    <>
                        <Link to={'/productInfo/'+params.row.id}>
                            <Info className='productInfoBtn' />
                        </Link>
                        <Delete className='productDelBtn' onClick={ ()=> handleDelete(params.row.id)} />
                    </>
                )
            })
        },
    ];



  return (
    <div className='products'>
        <DataGrid
            rows={data}
            columns={columns}
            pageSize={8}
            checkboxSelection
            disableSelectionOnClick
        />
    </div>
  )
}
