//importamos Componente
import React, { Component } from "react";
import "./App.css";
//hacemos el import del Router, link y switch
import { Route, Link, Switch } from "react-router-dom";
//importamos los componentes
import Main from "./components/main";
import Entrantes from "./components/entrantes";
import Bebidas from "./components/bebidas";
import Postres from "./components/postres";
import Platos from "./components/platos";
import Capacidad from "./components/capacidad";
import Info from "./components/info";

//convertimos App en componente
class App extends Component {
  render() {
    return (
      <div>
       
          {/* enlaces */}
          <ul id="menu">
            <li>
              <Link to="/main">Menú del día</Link>
            </li>
            <li>
              <Link to="/entrantes">Entrantes</Link>
            </li>
            <li>
              <Link to="/platos">Platos</Link>
            </li>
            <li>
              <Link to="/bebidas">Bebidas</Link>
            </li>
            <li>
              <Link to="/postres/naranjas/fresas">Postres</Link>
            </li>
          </ul>

          {/* rutas */}
          {/* todas las rutas utilizadas en la aplicación deben estar aquí declaradas */}
          <Switch>
            {/* cargamos el componente menu del día por defecto al cargar la página */}
            <Route exact path="/" component={Main} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/entrantes" component={Entrantes} />
            <Route exact path="/platos" component={Platos} />
            <Route exact path="/bebidas" component={Bebidas} />
            {/* le pasamos al componente postres, dos parámetros, que serán las frutas de temporada que queremos incluir en la carta */}
            <Route
              exact
              path="/postres/:tipoFruta1/:tipoFruta2"
              component={Postres}
            />
            {/* le pasamos el número de comensales a través del input, se llama al componente capacidad que hace las validaciones y con una redirección a info, nos dice si los comensales caben o no */}
            <Route exact path="/capacidad/:comensales" component={Capacidad} />
            <Route exact path="/info/:message" component={Info} />
          </Switch>
      
      </div>
    );
  }
}

export default App;
