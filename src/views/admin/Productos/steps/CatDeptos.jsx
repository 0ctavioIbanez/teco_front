import { useState, useEffect } from "react"
import { request } from '../../../../services/request'
import Search from "../../../../components/admin/form/Search/Search";

const CatDeptos = () => {
    const [departamentos, setDepartamentos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [tags, setTags] = useState([]);

    const getCategorias = async () => {
        const res = await request.get("categoria/get");
        setCategorias(res.data);
    };
    const getDepartamentos = async () => {
        const res = await request.get("departamento/get");
        setDepartamentos(res.data.res);
    };
    const getTags = async () => {
        const res = await request.get("tags/get");
        setTags(res.data);
    };

    useEffect(() => {
        Promise.all([getDepartamentos(), getCategorias(), getTags()])
    }, [])


    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4 className="font-weight-bold">Selecciona las categorías a los que pertenece</h4>
                </div>
                <form className="card-body d-flex flex-wrap">
                    <Search label="Categorías" items={categorias.map(categoria => ({ label: categoria.categoria, value: categoria.id }))} />
                    <Search label="Departamentos" items={departamentos.map(item => ({ value: item.id, label: item.departamento }))} />
                    <Search label="Etiquetas" items={ tags.map(item => ({value: item.id, label: item.tag})) } />
                </form>
            </div>
        </>
    )
}

export default CatDeptos