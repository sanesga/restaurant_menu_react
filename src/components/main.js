import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comensales: 0
    };
  }

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
          <label>
            Indica el número de comensales para consultar disponibilidad
          </label>
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
