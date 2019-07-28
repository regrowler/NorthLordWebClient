import React from 'react'
import css from './Header.module.css'
function Header(props) {
    return(
        <div className={css.header}>
            <div className={css.headerlogo}>
                <img src="icon.jpg" alt=""/>
            </div>
            <div className={css.headertext}>
                <h1>NORTHLORD</h1>
            </div>
        </div>
    )
}
export default Header