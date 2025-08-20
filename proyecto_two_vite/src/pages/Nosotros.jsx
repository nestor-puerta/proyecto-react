// src/pages/Nosotros.jsx
import './pages.css';

const Nosotros = () => {
    return (
        <section className="pagina-nosotros">
            <div className="contenedor-pagina">
                <h2 className="titulo-pagina">Sobre Nosotros</h2>
                <p className="texto-pagina">
                    Conoce Vite, una herramienta moderna para desarrollar aplicaciones con React y otras tecnologías.
                </p>

                <div className="caracteristicas">
                    <div className="caracteristica">
                        <h3>⚡ ¿Qué es Vite?</h3>
                        <p>Es un entorno de desarrollo rápido que optimiza el rendimiento y facilita trabajar con proyectos modernos.</p>
                    </div>
                    <div className="caracteristica">
                        <h3>🔹 Características</h3>
                        <p>- Arranque rápido<br/>- Hot Reload<br/>- Soporte para JSX y TypeScript<br/>- Configuración mínima</p>
                    </div>
                    <div className="caracteristica">
                        <h3>✅ Ventajas</h3>
                        <p>- Desarrollo ágil<br/>- Experiencia de programador mejorada<br/>- Integración sencilla con React</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Nosotros;