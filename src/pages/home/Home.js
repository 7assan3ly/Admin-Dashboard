import React from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/Featured/Featured'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import { salesData } from '../../dummyData'
import './home.css'
import Footer from '../../components/footer/Footer'

export default function Home() {
  return (
    <div className='home'>
      <Featured />
      <Chart data={salesData} dataKey='No. of Sales' grid title='Sales Analystics'/>
      <div className='widget'>
        <WidgetSm />
        <WidgetLg />
      </div>
      <Footer />
    </div>
  )
}
