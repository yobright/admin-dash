import React from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'

import Logo from '../../assets/images/logo.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'



const SidebarItem = props => {
    
    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
} 


const Sidebar = props => {

    const activeItem = sidebar_items.findIndex(item => item.route === props.[0].location.pathname)
    console.log(props)

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={Logo} alt="logo"  />
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <div>
                            <SidebarItem 
                                title={item.display_name}
                                icon={item.icon}
                                active={index === activeItem}
                            />
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar
