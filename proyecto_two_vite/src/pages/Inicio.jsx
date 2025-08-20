// src/pages/Inicio.jsx
import './pages.css';

const Inicio = () => {
    return (
        <section className="pagina-inicio">
            <div className="contenedor-pagina">
                <h2 className="titulo-pagina">Página de Inicio</h2>
                <p className="texto-pagina">Bienvenido a la página principal del sitio.</p>
                <div className="contenedor-botones">
                    <button className="btn-primario">Explorar</button>
                    <button className="btn-secundario">Saber más</button>
                </div>
            </div>
        </section>
    );
};
export default Inicio;