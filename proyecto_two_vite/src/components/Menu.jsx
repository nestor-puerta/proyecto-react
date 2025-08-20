import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <nav >
            <Link to="/" >Inicio</Link>
            <Link to="/nosotros">Nosotros</Link>
        </nav>
    );
};
export default Menu;