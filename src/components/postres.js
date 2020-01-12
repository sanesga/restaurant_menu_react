import React, { Component } from "react";
//hacemos el import del Router, link y switch
import { Link } from "react-router-dom";


class Postres extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const tipoFruta1 = this.props.match.params.tipoFruta1;
    const tipoFruta2 = this.props.match.params.tipoFruta2;

    return (
      <div className="container">
       <ul className="elementos">
           <li>Flan:<span> 3€</span></li>
           <li>Helado:<span> 2,5€</span></li>
           <li>Fruta de temporada ({tipoFruta1} y {tipoFruta2}):<span> 2€</span></li>
       </ul>
        {/* volvemos al componente padre, que carga el componente main por defecto (menú del día) */}
       <Link to="/"><button className="volver">Volver</button></Link>
          {/* no necesitamos especificar las rutas, poorque ya están en root */}
      </div>
    );
  }
}
export default Postres;
