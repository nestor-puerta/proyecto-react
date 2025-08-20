// src/pages/Nosotros.jsx
import './pages.css';

const Nosotros = () => {
    return (
        <section className="pagina-nosotros">
            <div className="contenedor-pagina">
                <h2 className="titulo-pagina">Sobre Nosotros</h2>
                <p className="texto-pagina">Somos una empresa dedicada a enseñar React de forma práctica.</p>
                
                <div className="caracteristicas">
                    <div className="caracteristica">
                        <div className="icono-caracteristica">🚀</div>
                        <h3>Innovación</h3>
                        <p>Utilizamos las últimas tecnologías</p>
                    </div>
                    <div className="caracteristica">
                        <div className="icono-caracteristica">💡</div>
                        <h3>Conocimiento</h3>
                        <p>Compartimos nuestro expertise</p>
                    </div>
                    <div className="caracteristica">
                        <div className="icono-caracteristica">❤️</div>
                        <h3>Pasión</h3>
                        <p>Amamos lo que hacemos</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Nosotros;