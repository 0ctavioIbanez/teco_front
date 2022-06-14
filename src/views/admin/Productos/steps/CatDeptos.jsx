import { useState, useEffect } from "react"
import { request } from '../../../../services/request'
import Search from "../../../../components/admin/form/Search/Search";

const CatDeptos = ({handleGeneralPayload, state}) => {
    const [departamentos, setDepartamentos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [tags, setTags] = useState([]);
    const [payload, setPayload] = useState({categorias: [], departamentos:[], tags: []});

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
    }, []);

    useEffect(() => {
      handleGeneralPayload({...state, detalles: payload});
    }, [payload])
    


    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4 className="font-weight-bold">Selecciona las categorías a los que pertenece</h4>
                </div>
                <form className="card-body d-flex flex-wrap">
                    <Search handler={setPayload} state={payload} className="col-md-6" name="categorias" label="* Categorías" items={categorias.map(categoria => ({ label: categoria.categoria, value: categoria.id }))} />
                    <Search handler={setPayload} state={payload} className="col-md-6" name="departamentos" label="* Departamentos" items={departamentos.map(item => ({ value: item.id, label: item.departamento }))} />
                    <Search handler={setPayload} state={payload} className="col-md-6" name="tags" label="Etiquetas" items={ tags.map(item => ({value: item.id, label: item.tag})) } />
                </form>
            </div>
        </>
    )
}

export default CatDeptos