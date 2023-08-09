import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    Mi Sitio
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                        Inicio
                    </a>
                    <a className="navbar-item" href="/acerca">
                        Acerca de
                    </a>
                    <a className="navbar-item" href="/servicios">
                        Servicios
                    </a>
                    <a className="navbar-item" href="/contacto">
                        Contacto
                    </a>
                </div>
                <div className="navbar-end">
                    <CartWidget />
                    5
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
