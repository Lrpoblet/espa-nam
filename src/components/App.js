// import {useEffect, useState} from 'react';
// import {Route} from 'react-router-dom';
// import callToApi from '../services/api';
// import ls from '../services/localStorage';

import '../styles/App.scss';
import logo from '../images/Logo.png';

function App() {
  // VARIABLES ESTADO

  // USEEFFECT

  // FUNCIONES HANDLER

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN

  return (
    <div className="container">
      <header className="header">
        <img className="logo" src={logo} alt="Espa-¡ñam!" title="Espa-¡ñam!" />
        <form action="" className="search">
          <select name="" id="select">
            <option selected="true" disabled="disabled" value="">
              Selecciona Comunidad Autónoma
            </option>
            <option value="Andalucía">Andalucía</option>
            <option value="Aragón">Aragón</option>
            <option value="Asturias">Asturias</option>
            <option value="Baleares">Islas Baleares</option>
            <option value="Canarias">Islas Canarias</option>
            <option value="Cantabria">Cantabria</option>
            <option value="Castilla La-Mancha">Castilla La-Mancha</option>
            <option value="Castilla y León">Castilla y León</option>
            <option value="Cataluña">Cataluña</option>
            <option value="Comunidad Valenciana">Comunidad Valenciana</option>
            <option value="Extremadura">Extremadura</option>
            <option value="Galicia">Galicia</option>
            <option value="Comunidad de Madrid">Comunidad de Madrid</option>
            <option value="Murcia">Murcia</option>
            <option value="Navarra">Navarra</option>
            <option value="País Vasco">País Vasco</option>
            <option value="La Rioja">La Rioja</option>
          </select>
          {/* <input type="button" value="Search" className="search__button" /> */}
        </form>
      </header>
    </div>
  );
}

export default App;
