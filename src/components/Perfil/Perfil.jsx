import React from "react";
import './Perfil.css'
import foto from './fotoDePerfil.webp';
function Perfil(){

    return(

        


        <div className="container1">
      <div className="tarjeta">
        <img className="fotoDePerfil" src={foto} alt="foto" />
        <div className="textoDePerfil">
          <h3>ALEJANDRO PATRICIO QUIROGA</h3>
          Analista Programador,
          tengo 24 años, me considero una persona apasionada por la programación y me gusta aprender algo nuevo cada día
        </div>
      </div>
    </div>

        
      


      
    )
}

export default Perfil;