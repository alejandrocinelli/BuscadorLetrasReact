import Formulario from "./Formulario"
import useLetras from "../hooks/useLetras"
import Alerta from "./Alerta"
import Letra from "./Letra";
import Spiner from "./Spiner";


function AppLetras() {

    const {alerta, letra, cargando} = useLetras();

  return (
    <>
    <header>Busqueda de Letras de Canciones</header>
    
    <Formulario />
    
    <main>
    {alerta ? <Alerta alerta={alerta}></Alerta> : 
    letra ? <Letra></Letra> :
    cargando ? <Spiner></Spiner> :
     <p className="text-center">La API se tarda aprox unos 30seg - Busca artistas conocidos - Completa bien los nombres por que sino te tira error la API... No vale poner "michael yaison pire" </p>}
    </main>
    </>
  )
}
export default AppLetras