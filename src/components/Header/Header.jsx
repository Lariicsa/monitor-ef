import React, { useState } from "react";
import './Header.scss'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import { Sidebar } from '../Sidebar/Sidebar'
import Navbar from "../Navbar/Navbar";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <Navbar />
            <div className="logo-mobile"></div>
            <BurgerMenu open={open} setOpen={setOpen} />
            <Sidebar open={open} setOpen={setOpen}></Sidebar>
        </header>
    )
}

export default Header;
