import { Link } from 'react-router-dom';
import './navbar.css';
import home from '../../../assets/img/icons/home.svg';
import search from '../../../assets/img/icons/search.svg';
import cart from '../../../assets/img/icons/cart.svg';
import menu from '../../../assets/img/icons/menu.svg';

const Navbar = ({ expanded, setExpanded }) => {
  const path = window.location.pathname;

  return (
    <div className='navbar__ d-flex align-items-center'>
      <Link className={`navbar__item ${path === '/' ? 'active' : ''}`} to='/'>
        <img src={home} alt="nav icon" />
        Inicio
      </Link>
      <button className={`navbar__item ${path === '/search' ? 'active' : ''}`}>
        <img src={search} alt="nav icon" />
        Buscar
      </button>
      <Link className={`navbar__item ${path === '/cart' ? 'active' : ''}`} to='/'>
        <img src={cart} alt="nav icon" />
        Carrito
      </Link>
      <button className={`navbar__item`} to='/' onClick={e => setExpanded(!expanded)}>
        <img src={menu} alt="nav icon" />
        Menú
      </button>

    </div>
  )
}

export default Navbar