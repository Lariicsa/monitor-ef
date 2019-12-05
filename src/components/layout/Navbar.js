import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to={'/'}>
                    Monitor Ef
                </Link>

                <Link to={'/'} role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Link>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to={'/students'} className="navbar-item">Ver alumnos</Link>
                    <Link to={'/students/new'} className="navbar-item">Agregar alumnos</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar