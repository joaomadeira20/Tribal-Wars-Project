import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar(props: any) {

    const [activeItem2, setA] = useState('')

    return (
        <div className="navbar">

            <Link to="/geral" className={"navbar-item" + (activeItem2 === "Geral" ? " navbar-item-selected" : "")} onClick={() => setA("Geral")}>
                Geral
            </Link>

            <Link to="/guerras" className={"navbar-item" + (activeItem2 === "Guerras" ? " navbar-item-selected" : "")} onClick={() => setA("Guerras")}>
                Guerras
            </Link>

            <Link to="/profile" className={"navbar-item" + (activeItem2 === "Perfil" ? " navbar-item-selected" : "")} onClick={() => setA("Perfil")}>
                Perfil
            </Link>

            <Link to="/worlds" className={"navbar-item" + (activeItem2 === "Mundos" ? " navbar-item-selected" : "")} onClick={() => setA("Mundos")}>
                Mundos
            </Link>

            <Link to="/configs" className={"navbar-item" + (activeItem2 === "Configurações" ? " navbar-item-selected" : "")} onClick={() => setA("Configurações")}>
                Configurações
            </Link>

        </div>
    );
}