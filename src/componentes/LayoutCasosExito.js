import React, { useState, useEffect } from 'react';
import Clientes from './Clientes';
import Logros from './Logros';
import Colaborar from './Colaborar';
import CasosExito from './CasosExito';

const LayoutCasosExito = () => {
    const [componenteActual, setComponenteActual] = useState(<CasosExito />);

    useEffect(() => {
        const path = window.location.pathname;
        if (path === "/casosexito/clientes") setComponenteActual(<Clientes />);
        else if (path === "/casosexito/logros") setComponenteActual(<Logros />);
        else if (path === "/casosexito/colaborar") setComponenteActual(<Colaborar />);
        else setComponenteActual(<CasosExito />);
    }, [window.location.pathname]); // Se ejecuta cuando cambia la URL

    return (
        <div className="App">
            <header>
                <ul>
                    <li><a href="/casosexito/clientes">Clientes</a></li>
                    <li><a href="/casosexito/logros">Logros</a></li>
                    <li><a href="/casosexito/colaborar">Colaborar</a></li>
                    <li><a href="/">Volver al Inicio</a></li>
                </ul>
            </header>

            <section className="hero">
                {componenteActual}
            </section>
        </div>
    );
};

export default LayoutCasosExito;
