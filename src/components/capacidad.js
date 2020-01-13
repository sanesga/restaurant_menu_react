import React, { Component } from "react";
//importamos la librería redirect
import {Redirect} from "react-router-dom";

class Capacidad extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    const comensales = this.props.match.params.comensales;
    //console.log(comensales);
    //console.log(typeof(comensales));
  
    if(comensales==="0"){
      //console.log("entra al if");
      // no han marcado ningún comensal, enviamos a la página de error
      return <Redirect to="/info/empty"></Redirect>
    }else if(comensales>100){
      //no caben más de 100 comensales, enviamos a la página de error
      return <Redirect to="/info/full"></Redirect>
    }else if(comensales<0){
      //si se especifica un número negativo
      return <Redirect to="/info/negativo"></Redirect>
    }else{
      //para los demás casos, se podrá acudir
      return <Redirect to="/info/ok"></Redirect>
    }
  }
}
export default Capacidad;
