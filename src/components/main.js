import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comensales: 0
    };
  }
//recuperamos el número de comensales del input
  consultar = e => {
    this.setState({
      comensales: event.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Menú del día</h1>
        <ul className="elementos">
          <li>Ensalada</li>
          <li>Macarrones</li>
          <li>Pollo al horno</li>
          <li>Flan de huevo</li>
        </ul>
        <h2>12€</h2>

        <div id="comensales">
          <label id="info">
            Indica el número de comensales para consultar disponibilidad
          </label>
          <p id="validaciones">(Validaciones: campo vacío, 0, no más de 100 comensales ni números negativos)</p>
          <input type="number" min="1" onChange={this.consultar}></input>
          {/* <p>{this.state.comensales}</p> */}
        <Link to={"/capacidad/"+this.state.comensales}>
          <button>Consultar</button>
        </Link>
        {/* no necesitamos especificar las rutas, porque ya están en root */}
        </div>

        
      </div>
    );
  }
}
export default Main;
