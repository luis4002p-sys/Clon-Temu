import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/buscar">Buscar</Link>
      <Link to="/categorias">Categorías</Link>
      <Link to="/ofertas">Ofertas</Link>
    </nav>
  );
};

export default NavBar;
