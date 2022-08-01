import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({data, title, grid, dataKey}) {

  return (
    <div className='chart'>
        <h3 className='chartHead'>
            {title}
        </h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey='Month' stroke="#5550bd" />
                <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                <Tooltip />
                {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
                <Legend />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
