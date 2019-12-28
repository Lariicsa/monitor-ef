import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
    return (
        <>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to={'/'} className="navbar-item">Inicio</Link>
                    <Link to={'/students'} className="navbar-item">Alumnos</Link>
                    <Link to={'/students/new'} className="navbar-item">Agregar</Link>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar