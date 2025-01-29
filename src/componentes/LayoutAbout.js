import React, { useState, useEffect } from 'react';
import Bio from './Bio';
import Logros from './Logros';
import Tips from './Tips';
import About from './About';

const LayoutAbout = () => {
    const [componenteActual, setComponenteActual] = useState(<About />);

    useEffect(() => {
        const path = window.location.pathname;
        if (path === "/about/bio") setComponenteActual(<Bio />);
        else if (path === "/about/logros") setComponenteActual(<Logros />);
        else if (path === "/about/trabajo") setComponenteActual(<Tips />);
        else setComponenteActual(<About />);
    }, [window.location.pathname]); // Se ejecuta cuando cambia la URL

    return (
        <div className="App">
            <header>
                <ul>
                    <li><a href="/about/bio">Biografía</a></li>
                    <li><a href="/about/logros">Logros</a></li>
                    <li><a href="/about/trabajo">Trabajo</a></li>
                    <li><a href="/">Volver al Inicio</a></li>
                </ul>
            </header>

            <section className="hero">
                {componenteActual}
            </section>
        </div>
    );
};

export default LayoutAbout;
