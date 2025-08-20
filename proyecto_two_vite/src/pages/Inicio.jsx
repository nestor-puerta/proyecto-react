// src/pages/Inicio.jsx
import './pages.css';

const Inicio = () => {
    return (
         <section className="pagina-inicio">
            <div className="contenedor-pagina">
                <h2 className="titulo-pagina">Página de Inicio</h2>
                <p className="texto-pagina">
                    Bienvenido, aquí aprenderás los conceptos básicos de React.
                </p>

                <div className="caracteristicas">
                    <div className="caracteristica">
                        <h3>🔹 Componentes React</h3>
                        <p>Son bloques reutilizables de código que representan partes de la interfaz (botones, menús, formularios, etc.).</p>
                    </div>
                    <div className="caracteristica">
                        <h3>🔹 Layout</h3>
                        <p>Es la estructura base de la aplicación que organiza cómo se distribuyen los componentes en pantalla.</p>
                    </div>
                    <div className="caracteristica">
                        <h3>🔹 JSX</h3>
                        <p>Es una extensión de JavaScript que permite escribir código similar a HTML dentro de React.</p>
                    </div>
                    <div className="caracteristica">
                        <h3>🔹 Diferencia JS y JSX</h3>
                        <p>JavaScript es el lenguaje de programación, mientras que JSX es una sintaxis especial que combina HTML y JS para crear interfaces.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Inicio;