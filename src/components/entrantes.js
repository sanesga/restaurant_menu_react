import React, { Component } from "react";
//hacemos el import del Router, link y switch
import { Link } from "react-router-dom";

class Entrantes extends Component {

  render() {

    return (
      <div className="container">
        <ul className="elementos">
          <li>Sepia:<span> 9€</span></li>
          <li>Patatas bravas:<span> 5€</span></li>
          <li>Ensaladilla:<span> 4€</span></li>
        </ul>

        {/* volvemos al componente padre, que carga el componente main por defecto (menú del día) */}
        <Link to="/"><button className="volver">Volver</button></Link>
         {/* no necesitamos especificar las rutas, poorque ya están en root */}
      </div>
    );
  }
}
export default Entrantes;
