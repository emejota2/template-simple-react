import React from 'react';
import logo1 from '../../img/header-simpsons.gif'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <img src={logo1} width="250" height="50"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand"></a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active">Contacto</a>
                        </li>
                    </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-danger" type="submit">Busqueda</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;