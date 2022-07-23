import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ expanded, setExpanded }) => {
  return (
    <div className='navbar__ d-flex align-items-center'>
      <Link className="navbar__item" to='/'>
        Inicio
      </Link>
      <button className='navbar__item'>
        Buscar
      </button>
      <Link className="navbar__item" to='/'>
        Carrito
      </Link>
      <button className="navbar__item" to='/' onClick={e => setExpanded(!expanded)}>
        Menú
      </button>

    </div>
  )
}

export default Navbar