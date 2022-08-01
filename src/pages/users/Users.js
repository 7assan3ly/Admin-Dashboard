import React, { useState } from 'react'
import './users.css'
import { DataGrid } from '@mui/x-data-grid';
import { Edit, Delete } from '@mui/icons-material';
import { userRows } from '../../dummyData';
import {Link} from 'react-router-dom'




export default function Users() {


    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    } 

    // Users Page "Columns Of Table"
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'username', headerName: 'User name', width: 200, renderCell: (params => {
                return (
                    <div className='userItem'>
                        <img src='https://via.placeholder.com/32' className='userItemImg' alt='' />
                        {params.row.username}
                    </div>
                )
            })
        },
        { field: 'email', headerName: 'E-Mail', width: 200 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'transaction', headerName: 'Transaction', width: 200 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params => {
                return (
                    <>
                        <Link to={'/editUser/'+params.row.id}>
                            <Edit className='userEditBtn' />
                        </Link>
                        <Delete className='userDelBtn' onClick={ ()=> handleDelete(params.row.id)} />
                    </>
                )
            })
        },
    ];


    return (
        <div className='user'>
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
