import './sidebar.css'

import React from 'react'
import { BarChart, ChatBubbleOutline, CurrencyExchange, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@mui/icons-material'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem active'>
                            <LineStyle className='sidebarIcon' />
                            home
                        </li>
                        <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick menu</h3>
                    <ul className='sidebarList'>
                        <Link to='/users' className='link'>
                            <li className='sidebarListItem'>
                                <PermIdentity className='sidebarIcon' />
                                Users
                            </li>
                        </Link>
                        <Link to='/products' className='link'>
                            <li className='sidebarListItem'>
                                <Storefront className='sidebarIcon' />
                                Products
                            </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <CurrencyExchange className='sidebarIcon' />
                            Transactions
                        </li>
                        <li className='sidebarListItem'>
                            <BarChart className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <MailOutline className='sidebarIcon' />
                            Mail
                        </li>
                        <li className='sidebarListItem'>
                            <DynamicFeed className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className='sidebarListItem'>
                            <ChatBubbleOutline className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Staff</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <WorkOutline className='sidebarIcon' />
                            Manage
                        </li>
                        <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <Report className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar