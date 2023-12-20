import React from "react";
import Perfil from "../Perfil/Perfil";    
import './Home.css';
import ListarProyectos from "../Proyectos/ListarProyectos";
function Home(){

return(

    <div className="bodyc">
         <div>
            <Perfil/>
        </div>

        <div>
        <p> Expirence</p>
        </div>

        <div>
        <p> Proyects</p>
            <ListarProyectos></ListarProyectos>
        </div>

        <div>
            <p> Contacto</p>
        </div>
    </div>

   
)
}

export default Home;