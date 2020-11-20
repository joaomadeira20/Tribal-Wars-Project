import React, { useState } from 'react';

import '../styles/navbar.css'

export default function Navbar(props: any) {

    // Armazenamos a tab atual na variável para designar a classe correta do item
    const [activeItem, setActivedItem] = useState(sessionStorage.getItem('@tribalwars-assistant/current-tab-navbar'));

    // Função para atualizar a tab atual
    function updateCurrentTab(tab: string) {
        sessionStorage.setItem('@tribalwars-assistant/current-tab-navbar', tab);
    }

    return (
        <div className="navbar">

            <a href="/users" className={"navbar-item" + (activeItem == "DASHBOARD" ? " navbar-item-selected" : "")} onClick={() => updateCurrentTab("DASHBOARD")}>
                DASHBOARD
            </a>

            <a href="/guerras" className={"navbar-item" + (activeItem == "GUERRAS" ? " navbar-item-selected" : "")} onClick={() => updateCurrentTab("GUERRAS")}>
                GUERRAS
            </a>

            <a href="/users" className={"navbar-item" + (activeItem == "PERFIL" ? " navbar-item-selected" : "")} onClick={() => updateCurrentTab("PERFIL")}>
                PERFIL
            </a>

            <a href="/users" className={"navbar-item" + (activeItem == "MUNDOS" ? " navbar-item-selected" : "")} onClick={() => updateCurrentTab("MUNDOS")}>
                MUNDOS
            </a>

            <a href="/users" className={"navbar-item" + (activeItem == "CONFIGURAÇÕES" ? " navbar-item-selected" : "")} onClick={() => updateCurrentTab("CONFIGURAÇÕES")}>
                CONFIGURAÇÕES
            </a>

        </div>
    );
}