import React, { useState, useEffect } from "react";
import './ListarProyectos.css';

function ListarProyectos() {
  const [data, setData] = useState(null);
  const accessToken = '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'; 

  useEffect(() => {
    fetch('https://api.github.com/user/repos', {
      method: 'GET',
      headers: {
        Authorization: `token ${accessToken}`
      }
    })
      .then(response => response.json())
      .then(data => {
        // Filtrar los elementos que tengan el atributo 'name' igual a 'patri'
        const filteredData = data.filter(item => item.owner.login === 'patricio355');
        setData(filteredData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); // El segundo argumento es un array vacío para que el efecto se ejecute solo una vez (equivalente a componentDidMount)

  return (
    <div className="listaTarjetas">
      {data?.map((proyecto, index) =>
        <div className="cardProyecto" key={index}>
          <div className="imgProyecto">
            <img src={proyecto.owner.avatar_url} alt="" />
          </div>
          <div className="textProyect">
            <h3>{proyecto.name}</h3>
            <h6>{proyecto.language}</h6>
            <div className="icono">
              <a href={proyecto.svn_url} target="_blank" rel="noopener noreferrer">IR</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ListarProyectos;
