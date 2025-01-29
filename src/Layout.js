import React from 'react';
import './Layout.css';

const Layout = () => {
    return (
        <div className="App">
            <header>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/about">Acerca de mí</a></li>
                    <li><a href="/casosexito">Casos de éxito</a></li>
                </ul>
            </header>
        </div>
    );
};

export default Layout;
