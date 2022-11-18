import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import queryString from 'query-string';
import './filter.css'

const dummy = [{ section: 'Colores', sectionId: 1, items: [{ id: '1-1', name: 'Something', checked: false }, { id: '1-2', name: 'Foo', checked: false }] },
{ section: 'Tallas', sectionId: 2, items: [{ id: '2-1', name: 'Something', checked: false }, { id: '2-2', name: 'Foo', checked: false }] }]

const Filters = () => {
  const [filters, setFilters] = useState([]);
  const [queryParams, setQueryParams] = useState([]);
  const navigate = useNavigate();


  const handleCheck = (sectionId, id, { checked }) => {
    let _queryFilterParams = queryParams?.filters;

    if (checked) {
      if (_queryFilterParams?.length) {
        const exists = _queryFilterParams.some(param => String(param) === String(id));
        if (!exists) {
          _queryFilterParams.push(id);
        }
      } else {
        _queryFilterParams = [id];
      }
    }
    else {
      if (_queryFilterParams?.length) {
        _queryFilterParams = _queryFilterParams.filter(query => String(query) !== String(id));
      }
    }
    setQueryParams({
      ...queryParams,
      filters: _queryFilterParams
    });
  };

  const getFilters = async () => setFilters(dummy);

  const search = () => {
    console.log("searching...");
  }


  const updateChecks = () => {
    if (!queryParams || !queryParams.filters) {
      return;
    }
    const _queryParams = queryParams?.filters?.map(filter => String(filter));


    const _filters = filters?.map(flt => ({
      ...flt,
      items: flt.items.map(check => _queryParams.includes(String(check.id)) ? { ...check, checked: true } : { ...check, checked: false })
    }));
    setFilters(_filters);
    navigate({
      search: queryString.stringify(queryParams)
    })
  }


  /**
   * Set initial query params and filters
   */
  useEffect(() => {
    getFilters();
    const currentQueryParams = queryString.parse(window.location.search) || {};
    let _filters;

    if (Array.isArray(currentQueryParams.filters)) {
      _filters = currentQueryParams.filters
    } else if (currentQueryParams.filters) {
      _filters = [currentQueryParams.filters]; 
    }

    setQueryParams({...currentQueryParams, filters: _filters});
  }, []);

  /**
   * Updates query path
   */
  useEffect(() => {
    if (filters.length) {
      updateChecks();
    }
  }, [queryParams]);


  return (
    <aside className='bg-light tienda__filter p-3 d-flex flex-column justify-content-between'>
      <div>
        <h3 className='text-center pt-2 font-weight-bold'>Filtros</h3>
        <div className='filter__container'>
          {filters.map(({ section, items, sectionId }, key) =>
            <div className='' key={`filter-item-${key}`}>
              <h5 className='font-weight-bold'>{section}</h5>
              {items.map(({ id, name, checked }) =>
                <div key={`filters-${id}`} className='filter__boxes pl-2 mb-2 d-flex align-items-center'>
                  <input
                    id={`filter-check-${id}`}
                    type="checkbox"
                    onChange={({ target }) => handleCheck(sectionId, id, target)}
                    // checked={ queryParams?.filters?.some(flt => flt === id) }
                    checked={checked}
                  />
                  <label htmlFor={`filter-check-${id}`} className='ml-2'>{name}</label>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <button onClick={() => search()} type='button' className='btn btn-dark'>
        Aplicar filtros
      </button>
    </aside>
  )
}

export default Filters