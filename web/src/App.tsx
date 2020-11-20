import React from 'react';
import Routes from './routes'
import './styles/navbar.css'

function App() {

  return (
    <div> 
      <div className="navbar">       

        <div className="itensNavbar">
          <a className="linkNavbar">
            Teste1
          </a>
        </div>

        <div className="itensNavbar">
          <a className="linkNavbar">
            Teste2
          </a>
        </div>

      </div>

          <Routes/>
    </div>
  );
}

export default App;
