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
    const [categoria, setCategoria] = useState({ categoria: '', departamentos: [] });
    const [mainImage, setMainImage] = useState([]);
    const [coverImage, setCoverImage] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    const getDepartamentos = async () => {
        try {
            const res = await request.get("departamento/get");
            return res.data.res
        } catch (error) {
            console.log(error);
        }
    };

    const getCategoria = async () => {
        try {
            const res = await request.get(`categoria/get/${id}`);
            return res.data;
        } catch (error) {

        }
    };

    const setCheckedDeptos = (_departamentos, _categprias) => {
        const scopedDeptos = _departamentos.map(item => {
            const found = _categprias.find(cat => cat.id === item.id);
            if (found) {
                return { ...item, checked: true };
            }

            return { ...item, checked: false }
        });

        return scopedDeptos;
    };

    const controller = async e => {
        const deptos = await getDepartamentos();
        const cat = await getCategoria();

        if (!id) {
            return setDepartamentos(deptos);
        }

        const mergedCheck = setCheckedDeptos(deptos, cat.departamentos);
        setDepartamentos(mergedCheck);
        setCategoria(cat)
    }

    useEffect(() => {
        controller();
    }, []);

    const create = async e => {
        e.preventDefault();
        const _mainImage = mainImage.length ? mainImage[0].base64 : null;
        const _coverImage = coverImage.length ? coverImage[0].base64 : null;
        const payload = {
            ...form.build(e.target),
            departamentos: form.buildCheck(e.target.querySelector(".checks")),
            mainImage: _mainImage,
            coverImage: _coverImage
        };

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

    const update = async e => {
        e.preventDefault();
        message.loading();
        try {
            const _mainImage = mainImage.length ? mainImage[0].base64 : null;
            const _coverImage = coverImage.length ? coverImage[0].base64 : null;
            const req = await request.post('categoria/update', { ...form.build(e.target), id, mainImage: _mainImage, coverImage: _coverImage });
            message.success(req.data.message);
        } catch (error) {
            console.log(error);
            message.error("Lo sentimos, ocurrió un error");
        }
    }

    const handleCheck = (e, id) => {
        const index = departamentos.findIndex(depto => depto.id === id);
        const newDeptos = [...departamentos];
        newDeptos[index] = {
            ...newDeptos[index],
            checked: e.target.checked
        };

        setDepartamentos(newDeptos);
    }

    const erase = async e => {
        const question = await message.question("¿Deseas eliminar esta categoría?");
        if (!question.isConfirmed) {
            return
        }

        const pass = await message.input("Ingresa tu constraseña");
        if (!pass.isConfirmed) {
            return;
        }

        try {
            const res = await request.post("categoria/deleteAll", { id, pass: pass.value });
            await message.success(res.data.message);
            navigate("/admin/categorias/todas");
        } catch (error) {
            message.error("Lo sentimos, ocurrió un error");
        }
    };

    const removeImage = async ({ idImagenCover, idImagenMain }, type) => {
        const question = await message.question("¿Eliminar imágen?");
        if (question.isConfirmed) {
            const res = await request.post("categoria/removeImage", {
                idImage: type == 'cover' ? idImagenCover : idImagenMain,
                id, type
            });
            console.log(res);
        }

    };


    return (
        <>
            <Header title={id ? 'Crea una categoría' : 'Edita tu categoría'} btnLabel="Eliminar" btnClass="btn-sm btn-danger" customHandler={erase} />
            <Main>
                <form onSubmit={e => id ? update(e) : create(e)} className='d-flex flex-wrap'>
                    <div className="form-group col-12">
                        <label htmlFor="">Nombre de la categoría</label>
                        <input type="text" className="form-control" name='categoria' onChange={e => setCategoria({ ...categoria, categoria: e.target.value })} value={categoria.categoria} />
                    </div>
                    <div className="form-group col-lg-6">
                        <label>Imágen principal</label>
                        {categoria.mainImage ?
                            <div className='card'>
                                <img src={categoria.mainImage} className='card-img-top' alt="" />
                                <div className="col-12 card-footer">
                                    <button type='button' className='btn btn-danger btn-sm' onClick={e => removeImage(categoria, 'main')}>Eliminar</button>
                                </div>
                            </div>
                            : <Pond name="mainImage" onUpload={setMainImage} files={mainImage} />
                        }
                    </div>
                    <div className="form-group col-lg-6">
                        <label htmlFor="">Imágen secundaria</label>
                        {categoria.coverImage ?
                            <div className="card">
                                <img src={categoria.coverImage} alt="" className="card-img-top" />
                                <div className="card-footer">
                                    <button type='button' className='btn btn-danger btn-sm' onClick={e => removeImage(categoria, 'cover')}>
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                            : <Pond name="coverImage" onUpload={setCoverImage} files={coverImage} />
                        }
                    </div>
                    <div className="form-group col-12 d-flex flex-wrap checks">
                        <label htmlFor="" className='col-12'>Agrega departamentos</label>
                        {departamentos.map((departamento, d) =>
                            <div className='col-4' key={`chec${d}`}>
                                <input type="checkbox" name="departamentos" id={departamento.id} multi="deptos" onChange={e => handleCheck(e, departamento.id)} checked={departamento.checked} value={departamento.id} />
                                <label htmlFor={d} className='ml-2'>{departamento.departamento}</label>
                            </div>
                        )}
                    </div>
                    <div className="col-12 d-flex justify-content-end">
                        <button className='btn btn-primary'>
                            {id ? 'Actualizar' : 'Guardar'}
                        </button>
                    </div>
                </form>
            </Main>
        </>
    )
}

export default CategoriasNuevo