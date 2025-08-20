import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Inicio from "./src/pages/Inicio";
import Nosotros from "./src/pages/Nosotros";


const Rutas = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/Nosotros" element={<Nosotros/>} />
        </Routes>
    )
}

export default Rutas;