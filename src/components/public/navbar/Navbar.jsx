import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import home from '../../../assets/img/icons/home.svg';
import search from '../../../assets/img/icons/search.svg';
import cart from '../../../assets/img/icons/cart.svg';
import menu from '../../../assets/img/icons/menu.svg';
import Search from './Search';


const Navbar = ({ expanded, setExpanded }) => {
  const navigate = useNavigate();
  const path = window.location.pathname;
  const [searchText, setSearchText] = useState("");

  const handleSearch = event => {
    const { keyCode, target: { value } } = event;
    setSearchText(value);
    
    if (keyCode === 13) {
      setSearchText('');
      navigate(`/tienda?search=${value}`);
    }
  }


  return (
    <>
      <div className="topbar">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="topbar__item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/OneWeb_Logo.png" className='topbar__logo' alt="" />
          </Link>
          <div className="topbar__item flex-grow-1">
            <div className="topbar__search">
              {searchText ?  <Search text={searchText} showSearch={setSearchText} /> : null}
              <input type="search" className='form-control' onKeyUp={(e) => handleSearch(e)} placeholder='Buscar...' />
              <button>
                <img src={search} alt="icon search" />
              </button>
            </div>
          </div>
          <div className="topbar__item d-flex justify-content-end align-items-center">
            <div className='topbar__cart mr-3'>
              <img src={cart} alt="" />
            </div>
            <div className={`topbar__burger d-flex flex-column justify-content-between ${expanded ? 'active' : ''}`} onClick={e => setExpanded(!expanded)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
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
    </>
  )
}

export default Navbar