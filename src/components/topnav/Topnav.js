import React from 'react'
import './topnav.css'
import { NotificationsNone, Language, Settings } from '@mui/icons-material';


export default function Topnav() {
  return (
    <div className='topNav'>
        <div className='topWrapper'>
            <div className='topLeft'>
                <span className='logo'>
                    dashboard
                </span>
            </div>
            <div className='topRight'>
                <div className='iconWrapper'>
                    <NotificationsNone />
                    <span className='iconCount'>2</span>
                </div>
                <div className='iconWrapper'>
                    <Language />
                    <span className='iconCount'>2</span>
                </div>
                <div className='iconWrapper'>
                    <Settings />
                </div>

                <img src="https://via.placeholder.com/50" alt="profile pic" className='profileImg'/>
            </div>
        </div>
    </div>
  )
}
