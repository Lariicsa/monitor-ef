import React, { useState } from "react";
import './Header.scss'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import { Sidebar } from '../Sidebar/Sidebar'

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <nav className="navbar">
                <ul className="navbar__Menu">
                    <li className="navbar__Menu-brand"></li>
                    <li>Agregar Alumnos</li>
                    <li>Ver Alumnos</li>
                </ul>
            </nav>
            <div className="logo-mobile"></div>
            <BurgerMenu open={open} setOpen={setOpen} />
            <Sidebar open={open} setOpen={setOpen}></Sidebar>
        </header>
    )
}

export default Header;
