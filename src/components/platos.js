import React, { Component } from "react";
//hacemos el import del Router, link y switch
import { Link } from "react-router-dom";


class Platos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="container">
       <ul className="elementos">
           <li>Solomillo:<span> 12€</span></li>
           <li>Dorada:<span> 10€</span></li>
           <li>Ensalada:<span> 8€</span></li>
       </ul>
        {/* volvemos al componente padre, que carga el componente main por defecto (menú del día) */}
       <Link to="/"><button className="volver">Volver</button></Link>
      {/* no necesitamos especificar las rutas, poorque ya están en root */}
      </div>
    );
  }
}
export default Platos;
