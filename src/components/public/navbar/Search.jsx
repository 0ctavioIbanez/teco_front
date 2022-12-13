import { useEffect, useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import { request } from '../../../services/request';

const Search = ({ text, showSearch }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const requestSearch = async () => {
    try {
      const { data } = await request.get(`/search?kw=${text}`);
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleResultNavigation = (name, id) => {
    navigate(`tienda?search=${name}&from=${id}`);
    showSearch('');
  }

  useEffect(() => {
    requestSearch();
  }, [text]);


  const NoResults = () => <div className='search-not-found'>
    <p className='text-center no-match'>No se encontraron coincidencias</p>
    <p className='text-center'>Prueba con otras palabras</p>
  </div>


  return (
    <div className="search-bgd bg-white shadow-sm">
      {!items.length ? <NoResults /> : null}
      {items.map(({ items, title }, i) =>
        <Fragment key={`search-item-block-${i}`}>
          <b className='search-title'>{title}</b>
          {items.map(({ nombre, id, departamento }, d) =>
            <span onClick={() => handleResultNavigation(nombre, id)} className='search-result d-flex justify-content-between' key={`search-item-${d}`}>
              <span>{nombre}</span>
              <span>{departamento}</span>
            </span>
          )}
        </Fragment>
      )}
    </div>
  )
}

export default Search