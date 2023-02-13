import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav} from 'react-bootstrap'

const Navigation = () => {
    return (
        <ul className="navs">
            <NavLink to="/" className="nav-link"><li>HOME</li></NavLink>
            <NavLink to="/new" className="nav-link"><li>ADD PLANT</li></NavLink>
        </ul>
    )
}

export default Navigation