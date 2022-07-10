import { useState, useEffect } from 'react'
import './search.css'
import { useSearchParams } from 'react-router-dom';
import Select from 'react-select';
import { request } from '../../../../services/request';
import qs from 'query-string';

const Search = ({ onSearch }) => {
    const [colores, setColores] = useState([]);
    const [tallas, setTallas] = useState([]);
    const [departamentos, setDepartamentos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [querySearch, setQuerySearch] = useSearchParams({});

    const handleSearch = async (llave, value) => {
        // const prom = new Promise((resolve => {
        //     setTimeout(() => {
        //         resolve();
        //     }, 1000);
        // }));

        // await prom;

        const _query = qs.parse(window.location.search);
        _query[llave] = value;
        _query.page = 1;
        if (!value) {
            delete _query[llave];
        }
        setQuerySearch(_query);
    }

    const getColores = async () => {
        const req = await request.get("color/get");
        setColores(req.data);
    }
    const getDepartamentos = async () => {
        const req = await request.get('departamento/get');
        setDepartamentos(req.data.res);
    }
    const getCategorias = async () => {
        const req = await request.get('categoria/get');
        setCategorias(req.data);
    }
    const getTallas = async () => {
        const req = await request.get('talla/get');
        setTallas(req.data);
    };

    const search = async () => {
        const _query = qs.parse(window.location.search);
        Object.entries(_query).forEach(item => {
            if (!item[1]) {
                delete _query[item[0]];
            }
        });
        const res = await request.post('producto/search', _query);
        onSearch(res.data.items);
    }

    useEffect(() => {
        Promise.all([
            getColores(),
            getDepartamentos(),
            getCategorias(),
            getTallas()
        ])
    }, []);

    useEffect(() => {
        search();
    }, [querySearch])



    return (
        <div className="bg-light p-2 card">
            <div className="card shadow mb-2">
                <div className="form-group d-flex">
                    <div className="input-icon flex-grow-1 position-relative">
                        <span className="input-icon-addon">
                            <i className="fa fa-search" />
                        </span>
                        <input
                            type="text"
                            className='form-control'
                            placeholder="Buscar..."
                            onKeyUp={({ target }) => handleSearch('search', target.value)}
                            style={{ paddingLeft: '20px!important' }}
                        />
                    </div>

                </div>
            </div>

            <div className="overflow-x d-flex">
                <div className="form-group col-lg-4">
                    <label htmlFor="">Color</label>
                    <Select
                        options={colores.map(({ color, id }) => ({ label: color, value: id }))}
                        onChange={({ value }) => handleSearch('color', value)}
                    />
                </div>
                <div className="form-group col-lg-4">
                    <label htmlFor="">Talla</label>
                    <Select
                        options={tallas.map(({ id, talla }) => ({ label: talla, value: id }))}
                        onChange={({ value }) => handleSearch('talla', value)}
                    />
                </div>
                <div className="form-group col-lg-4">
                    <label htmlFor="">Departamentos</label>
                    <Select
                        options={departamentos.map(({ departamento, id }) => ({ label: departamento, value: id }))}
                        onChange={({ value }) => handleSearch('depto', value)}
                    />
                </div>
                <div className="form-group col-lg-4">
                    <label htmlFor="">Categorías</label>
                    <Select
                        options={categorias.map(({ categoria, id }) => ({ label: categoria, value: id }))}
                        onChange={({ value }) => handleSearch('categoria', value)}
                    />
                </div>
            </div>
            <div className="col-12 d-flex justify-content-end">
                <div className="form-group">
                    <button className="btn btn-outline-danger btn-sm" onClick={e => setQuerySearch({})}>
                        Limpiar
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Search