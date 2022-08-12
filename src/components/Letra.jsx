import useLetras from "../hooks/useLetras";
import Spiner from "./Spiner";

function Letra() {

    const {letra,cargando} = useLetras();

  return (
    cargando ? <Spiner></Spiner> :
    <div className="letra">{letra}</div>
  )
}
export default Letra