import { useContext, createContext, useState } from "react";
import axios from "axios";

const LetrasContext = createContext();

const LetrasProvider = ({ children }) => {
    
    const [alerta, setAlerta] = useState("");
    const [letra, setLetra] = useState("");
    const [cargando,setCargando] = useState(false);

    const buscarLetra = async (busqueda) => {
        setCargando(true);
        try {
            
            // utilizamos axios para hacer la peticion a la api y obtener la letra de la cancion
            //siempre devuelve un data con la respuesta por eso lo desestructuramos 
            const url = `https://api.lyrics.ovh/v1/${busqueda.artista}/${busqueda.cancion}`;
            const {data} = await axios.get(url);
            setLetra(data.lyrics);
            setAlerta("");
        } catch (error) {
            console.log(error)
            setAlerta("No se encontro la cancion");
            setTimeout(() => {
                setAlerta("");
            },3000)
            setLetra("");
        }
        setCargando(false);
    }

    return (
        <LetrasContext.Provider
        value={{
            alerta,
            setAlerta,
            buscarLetra,
            letra, 
            cargando
        }}
        >
       {children}
        </LetrasContext.Provider>
    );
}

export {
    LetrasProvider,
}

export default LetrasContext;