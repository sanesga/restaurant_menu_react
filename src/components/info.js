import React, { Component } from "react";
import { Link } from "react-router-dom";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {

    const message = this.props.match.params.message;
    //console.log("mensaje que se envia");
    //console.log(message);

    if(message==="empty"){
        return <div><h2>Error, no ha marcado ningún comensal</h2> <Link to="/"><button className="volver">Volver</button></Link></div>;
    }else if(message==="full"){
        return <div><h2>Lo sentimos, la capacidad máxima del salón es de 100 personas</h2> <Link to="/"><button className="volver">Volver</button></Link></div>;
    }else if(message==="ok"){
      return <div><h2>Enhorabuena, hay capacidad para los comensales seleccionados</h2> <Link to="/"><button className="volver">Volver</button></Link></div>;
    }else if(message==="negativo"){
      return <div><h2>Error, el número especificado, no es un número válido</h2> <Link to="/"><button className="volver">Volver</button></Link></div>;
    }

  }
}
export default Info;
