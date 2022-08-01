import React from 'react'
import './featured.css'
import {ArrowDownward, ArrowUpward} from '@mui/icons-material'

export default function Featured() {
  return (
    <div className='Featured'>
        <div className='featItem'>
            <span className='featItemHead'>Revenue</span>
            <div className='moneyWrapper'>
                <span className='money'>$2,222</span>
                <span className='moneyStats'>-2.2 <ArrowDownward className='moneyStatsIcon negative' /></span>
            </div>
            <p>Compared to last month</p>
        </div>
        
        <div className='featItem'>
            <span className='featItemHead'>Sales</span>
            <div className='moneyWrapper'>
                <span className='money'>$2,222</span>
                <span className='moneyStats'>+2.2 <ArrowUpward className='moneyStatsIcon' /></span>
            </div>
            <p>Compared to last month</p>
        </div>
        <div className='featItem'>
            <span className='featItemHead'>Cost</span>
            <div className='moneyWrapper'>
                <span className='money'>$2,222</span>
                <span className='moneyStats'>+2.2 <ArrowUpward className='moneyStatsIcon' /></span>
            </div>
            <p>Compared to last month</p>
        </div>

    </div>
  )
}
