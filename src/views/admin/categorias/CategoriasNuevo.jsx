import { useState, useEffect } from 'react'
import Header from '../../../components/admin/Header'
import Main from '../layout/Main'
import { request } from '../../../services/request'
import Pond from '../../../components/admin/Filepond/Pond'
import { form } from '../../../assets/helpers/utilities'
import { message } from '../../../assets/helpers/Message'
import { useNavigate, useParams } from 'react-router-dom'

const CategoriasNuevo = () => {
    const [departamentos, setDepartamentos] = useState([]);
    const [categoria, setCategoria] = useState({ categoria: '' });
    const navigate = useNavigate();
    const { id } = useParams();

    const getDepartamentos = async () => {
        try {
            const res = await request.get("departamento/get");
            setDepartamentos(res.data.res);
        } catch (error) {

        }
    };

    useEffect(() => {
        getDepartamentos();
    }, []);

    const create = async e => {
        e.preventDefault();
        const payload = form.build(e.target);
        payload.departamentos = form.buildCheck(e.target.querySelector(".checks"));

        if (!payload.categoria) {
            return message.error("Debes agregar un nombre");
        }

        try {
            const response = await request.post("categoria/create", payload)
            await message.success(response.data.message);
            navigate(`/admin/categorias/ver/${response.data.id}`)
        } catch (error) {
            console.log(error);
            return message.error("Lo sentimos, ocurrió un error")
        }
    };


    return (
        <>
            <Header />
            <Main>
                <form onSubmit={e => create(e)} className='d-flex flex-wrap'>
                    <div className="form-group col-12">
                        <label htmlFor="">Nombre de la categoría</label>
                        <input type="text" className="form-control" name='categoria' onChange={e => setCategoria({ ...categoria, categoria: e.target.value })} value={categoria.categoria} />
                    </div>
                    <div className="form-group col-lg-6">
                        <label>Imágen principal</label>
                        <Pond name="mainImage" />
                    </div>
                    <div className="form-group col-lg-6">
                        <label htmlFor="">Imágen secundaria</label>
                        <Pond />
                    </div>
                    <div className="form-group col-12 d-flex flex-wrap checks">
                        <label htmlFor="" className='col-12'>Agrega departamentos</label>
                        {departamentos.map((departamento, d) =>
                            <div className='col-4' key={`chec${d}`}>
                                <input type="checkbox" id={d} value={departamento.id} />
                                <label htmlFor={d} className='ml-2'>{departamento.departamento}</label>
                            </div>
                        )}
                    </div>
                    <div className="col-12 d-flex justify-content-end">
                        <button className='btn btn-success'>Guardar</button>
                    </div>
                </form>
            </Main>
        </>
    )
}

export default CategoriasNuevo