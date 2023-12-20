import React from "react";
import './Perfil.css'
import foto from './fotoDePerfil.webp';
function Perfil(){

    return(

        


        <div className="container1">
      <div className="tarjeta">
        <div className="fotoDePerfil">
           <img src={foto} alt="foto" />
        </div>
       
        <div className="textoDePerfil">

          <h1>ALEJANDRO PATRICIO QUIROGA</h1>
          <p>Analista Programador,
          tengo 24 años, Estudiante de apu, me considero una persona apassionada por la programacion y me gusta apronder cada dia un poco mas
      </p> <div> 
        <div className="botones">
  <a href="#" role="button">Link</a>
<a href="#" role="button">Link</a>

        </div>
      
       </div>
       
       
        </div>
        
       
        
      </div>
    </div>

        
      


      
    )
}

export default Perfil;