import React from 'react'
import './sidebar.css'
import {Home, Analytics, TrendingUp, People, ShoppingCart, Paid, Report, Mail, Message, Feedback, ManageAccounts} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sideMenu'>
                <div className='sideWrapper'>
                    <h3 className='listHead'> Dashboard </h3>
                    <ul className='sideList'>
                        <Link className='link' to="/Admin-Dashboard">
                            <li className='sideListItem active'>
                                <Home className='sideListItemIcon' />
                                Home
                            </li>
                        </Link>
                        <li className='sideListItem'>
                            <Analytics className='sideListItemIcon' />
                            Analytics
                        </li>
                        <li className='sideListItem'>
                            <TrendingUp className='sideListItemIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                
                <div className='sideWrapper'>
                    <h3 className='listHead'> Quick Menu </h3>
                    <ul className='sideList'>
                    <Link className='link' to="/users">
                        <li className='sideListItem'>
                            <People className='sideListItemIcon' />
                            Users
                        </li>
                        </Link>
                        <Link className='link' to="/products">
                        <li className='sideListItem'>
                            <ShoppingCart className='sideListItemIcon' />
                            Products
                        </li>
                        </Link>
                        <li className='sideListItem'>
                            <Paid className='sideListItemIcon' />
                            Transactions
                        </li>
                        <li className='sideListItem'>
                            <Report className='sideListItemIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className='sideWrapper'>
                    <h3 className='listHead'> Notifications </h3>
                    <ul className='sideList'>
                        <li className='sideListItem '>
                            <Mail className='sideListItemIcon' />
                            Mail
                        </li>
                        <li className='sideListItem'>
                            <Message className='sideListItemIcon' />
                            Messages
                        </li>
                        <li className='sideListItem'>
                            <Feedback className='sideListItemIcon' />
                            Feedback
                        </li>
                    </ul>
                </div>
                <div className='sideWrapper'>
                    <h3 className='listHead'> Staff </h3>
                    <ul className='sideList'>
                        <li className='sideListItem '>
                            <ManageAccounts className='sideListItemIcon' />
                            Manage
                        </li>
                        <li className='sideListItem'>
                            <Analytics className='sideListItemIcon' />
                            Analytics
                        </li>
                        <li className='sideListItem'>
                            <Report className='sideListItemIcon' />
                            Reports
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
