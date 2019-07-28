import React from 'react'
import css from './Navbar.module.css'
import {NavLink} from "react-router-dom";
function Navbar() {
    return(
        <div className={css.wrapper}>
            <NavLink to="/profile" className={css.link}>Profile</NavLink>
            <NavLink to="/cars" className={css.link}>Cars</NavLink>
            <NavLink to="/lastrents" className={css.link}>Last Rents</NavLink>
            {/*<a href="/">Profile</a>*/}
            {/*<a href="/cars">Cars</a>*/}
            {/*<a href="/lastrents" >Last Rents</a>*/}
        </div>
    )

}
export default Navbar