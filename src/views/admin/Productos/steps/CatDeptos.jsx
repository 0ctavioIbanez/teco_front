import { useState, useEffect } from "react"
import { request } from '../../../../services/request'
import Search from "../../../../components/admin/form/Search/Search";
import { TagsInput } from "react-tag-input-component";
import Select from "react-select";

const CatDeptos = ({ handleGeneralPayload, state, selected }) => {
    const [departamentos, setDepartamentos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [tags, setTags] = useState([]);
    const [payload, setPayload] = useState({ categorias: [], departamentos: [], tags: [], codigos: [] });
    const [codigos, setCodigos] = useState([]);

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
        if (selected && selected.categorias && selected.departamentos) {
            if (selected.categorias.length && selected.departamentos.length) {
                setPayload({ ...selected })
            }
        }
        Promise.all([getDepartamentos(), getCategorias(), getTags()]);
    }, []);

    useEffect(() => {
        handleGeneralPayload({ ...state, detalles: payload });
    }, [payload]);

    const handleCodigos = code => {
        setPayload({ ...payload, codigos: [...codigos, ...code] })
    }


    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4 className="font-weight-bold">Selecciona las categorías a los que pertenece</h4>
                </div>
                <form className="card-body d-flex flex-wrap">
                    <div className="form-group col-md-6">
                        <label htmlFor="">Categorías</label>
                        <Search handler={setPayload} state={payload} values={selected.categorias} name="categorias" items={categorias.map(categoria => ({ label: categoria.categoria, value: categoria.id }))} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Departamentos</label>
                        <Search handler={setPayload} state={payload} values={selected.departamentos} name="departamentos" items={departamentos.map(item => ({ value: item.id, label: item.departamento }))} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Etiquetas</label>
                        <Search handler={setPayload} state={payload} values={selected.tags} name="tags" items={tags.map(item => ({ value: item.id, label: item.tag }))} />
                    </div>

                    <div className="form-group col-md-6">
                        <label>¿Asociar más códigos?</label>
                        <TagsInput
                            onChange={handleCodigos}
                            name="codigos"
                            placeHolder="Agregar código"
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default CatDeptos