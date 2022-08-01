import React from 'react'
import './widgetSm.css'
import { RemoveRedEye } from '@mui/icons-material'

export default function WidgetSm() {
    return (
        <div className='widgetSm'>
            <div className='widgetSmWrapper'>
                <h3 className='widgetSmTitle'>New Members</h3>
                <ul className='widgetSmList'>
                    <li className='widgetSmListItem'>
                        <img src='https://via.placeholder.com/40' alt='New Member Avatar' className='widgetSmMemAva' />
                        <div className='widgetSmMemInfo'>
                            <span className='widgetSmMemName'>Hassan ALy</span>
                            <span className='widgetSmMemTitle'>Frontend Developer</span>
                        </div>
                        <button className='WidgetSmMemBtn'>
                            <RemoveRedEye className='widgetSmMemIcon' />
                            <span>Display</span>
                        </button>
                    </li>
                    
                    <li className='widgetSmListItem'>
                        <img src='https://via.placeholder.com/40' alt='New Member Avatar' className='widgetSmMemAva' />
                        <div className='widgetSmMemInfo'>
                            <span className='widgetSmMemName'>Hassan ALy</span>
                            <span className='widgetSmMemTitle'>Frontend Developer</span>
                        </div>
                        <button className='WidgetSmMemBtn'>
                            <RemoveRedEye className='widgetSmMemIcon' />
                            <span>Display</span>
                        </button>
                    </li>
                    <li className='widgetSmListItem'>
                        <img src='https://via.placeholder.com/40' alt='New Member Avatar' className='widgetSmMemAva' />
                        <div className='widgetSmMemInfo'>
                            <span className='widgetSmMemName'>Hassan ALy</span>
                            <span className='widgetSmMemTitle'>Frontend Developer</span>
                        </div>
                        <button className='WidgetSmMemBtn'>
                            <RemoveRedEye className='widgetSmMemIcon' />
                            <span>Display</span>
                        </button>
                    </li>
                    <li className='widgetSmListItem'>
                        <img src='https://via.placeholder.com/40' alt='New Member Avatar' className='widgetSmMemAva' />
                        <div className='widgetSmMemInfo'>
                            <span className='widgetSmMemName'>Hassan ALy</span>
                            <span className='widgetSmMemTitle'>Frontend Developer</span>
                        </div>
                        <button className='WidgetSmMemBtn'>
                            <RemoveRedEye className='widgetSmMemIcon' />
                            <span>Display</span>
                        </button>
                    </li>
                    <li className='widgetSmListItem'>
                        <img src='https://via.placeholder.com/40' alt='New Member Avatar' className='widgetSmMemAva' />
                        <div className='widgetSmMemInfo'>
                            <span className='widgetSmMemName'>Hassan ALy</span>
                            <span className='widgetSmMemTitle'>Frontend Developer</span>
                        </div>
                        <button className='WidgetSmMemBtn'>
                            <RemoveRedEye className='widgetSmMemIcon' />
                            <span>Display</span>
                        </button>
                    </li>

                </ul>
            </div>
        </div>
    )
}
