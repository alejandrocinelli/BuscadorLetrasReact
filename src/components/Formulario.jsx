import { useState } from "react";
import useLetras from "../hooks/useLetras";


function Formulario() {
    
    const {buscarLetra, setAlerta} = useLetras();

    const [busqueda, setBusqueda] = useState({
        artista: "",
        cancion: ""
    })
    

    const handlerSubmit = (e) => {
        e.preventDefault();
        
        if(Object.values(busqueda).includes("")) {
            
            setAlerta("Todos los campos son obligatorios");
            return;
        }
   
        buscarLetra(busqueda);
        
    }

  return (
    <form onSubmit={handlerSubmit}>
      <legend>Busca por Artistas y Cancion</legend>
      <div className="form-grid">
        <div>
        <label htmlFor="">Artista</label>
        <input type="text" placeholder="Nombre del Artista" 
        name="artista" value={busqueda.artista} 
        onChange={e =>(setBusqueda(
            {...busqueda, [e.target.name] : e.target.value}
          
        ))}/>
      </div>

      <div>
        <label htmlFor="">Cancion</label>
        <input type="text" placeholder="Nombre de la Cancion" 
        name="cancion" value={busqueda.cancion} 
        onChange={e => (setBusqueda(
            {...busqueda, 
            [e.target.name] : e.target.value}
        ))} />
      </div>

        <input type="submit" value="Buscar"/>
        </div>
    </form>
  );
}
export default Formulario;
