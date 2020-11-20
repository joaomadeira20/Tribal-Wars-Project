import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar(props: any) {

    const [activeItem2, setA] = useState('')


    return (
        <div className="navbar">



            <Link to="/dashboard" className={"navbar-item" + (activeItem2 == "DASHBOARD" ? " navbar-item-selected" : "")} onClick={() => setA("DASHBOARD")}>
                DASHBOARD
            </Link>

            <Link to="/guerras" className={"navbar-item" + (activeItem2 == "GUERRAS" ? " navbar-item-selected" : "")} onClick={() => setA("GUERRAS")}>
                GUERRAS
            </Link>

            <Link to="/profile" className={"navbar-item" + (activeItem2 == "PERFIL" ? " navbar-item-selected" : "")} onClick={() => setA("PERFIL")}>
                PERFIL
            </Link>

            <Link to="/worlds" className={"navbar-item" + (activeItem2 == "MUNDOS" ? " navbar-item-selected" : "")} onClick={() => setA("MUNDOS")}>
                MUNDOS
            </Link>

            <Link to="/configs" className={"navbar-item" + (activeItem2 == "CONFIGURAÇÕES" ? " navbar-item-selected" : "")} onClick={() => setA("CONFIGURAÇÕES")}>
                CONFIGURAÇÕES
            </Link>

        </div>
    );
}