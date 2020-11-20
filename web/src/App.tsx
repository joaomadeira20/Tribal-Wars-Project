import React from 'react';
import Routes from './routes'
import { Link } from 'react-router-dom'
import { Router } from "react-router";
import { createBrowserHistory } from "history";

import './styles/navbar.css'

const history = createBrowserHistory();

function App() {

  return (
    <Router history={history}>
      <div>
        <div className="navbar">

          <div className="itensNavbar">
            <a className="linkNavbar" href="/users" >
              DASHBOARD
          </a>
          </div>

          <div className="itensNavbar">
            <Link to="/guerras" className="linkNavbar">
              <a>GUERRAS</a>
            </Link>
          </div>

          <div className="itensNavbar">
            <a className="linkNavbar">
              PERFIL
          </a>
          </div>

          <div className="itensNavbar">
            <a className="linkNavbar">
              MUNDOS
          </a>
          </div>

          <div className="itensNavbar">
            <a className="linkNavbar">
              CONFIGURAÇÕES
          </a>
          </div>

        </div>

        <Routes />

      </div>

    </Router>
  );
}

export default App;
