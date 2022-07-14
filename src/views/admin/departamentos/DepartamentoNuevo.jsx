import Header from "../../../components/admin/Header"
import Main from "../layout/Main"
import Pond from "../../../components/admin/Filepond/Pond"
import { form } from "../../../assets/helpers/utilities"
import { message } from "../../../assets/helpers/Message";
import { request } from "../../../services/request";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const DepartamentoNuevo = () => {
    const [departamento, setDepartamento] = useState({});
    const [erase, setErase] = useState(false);
    const [mainImage, setMainImage] = useState({});
    const [coverImage, setCoverImage] = useState({});
    const id = useParams().id;
    const navigate = useNavigate();

    const handleEdition = async (idNewDepto = null) => {
        const editable = window.location.pathname.includes("/ver");
        if (!editable) {
            return
        }

        try {
            const res = await request.get(`departamento/get/${id || idNewDepto}`);
            setDepartamento(res.data.res)
        } catch (error) {
            const errorAlert = await message.error('Lo sentimos, no podemos conectarnos al servidor');
            if (errorAlert.isConfirmed) {
                return navigate('/admin/departamento/todos')
            }
        }

    }

    const handleErase = async e => {
        if (!erase) {
            return setErase(false)
        }
        const confirmation = await message.question('¿Deseas eliminar este departamento y todos sus datos?');
        if (confirmation.isConfirmed) {
            const pass = await message.input("Ingresa tu contraseña");
            if (pass.isConfirmed) {
                try {
                    const req = await request.post('departamento/remove', { id, pass: pass.value })
                    console.log(req);
                    await message.success(req.data.message);
                    return navigate('/admin/departamento/todos')
                } catch (error) {
                    return message.error("Lo sentimos, ocurrió algo inesperado");
                }
            }
        }
    }

    useEffect(() => {
        handleEdition();
    }, []);

    useEffect(() => {
        handleErase()
    }, [erase])

    const create = async e => {
        e.preventDefault();
        const inicio = mainImage.length ? mainImage[0].base64 : null;
        const cover = coverImage.length ? coverImage[0].base64 : null;
        const data = { ...form.build(e.target), inicio, cover };
        if (!data.departamento) {
            return message.error("El nombre del departamento es obligatorio");
        }

        try {
            const response = await request.post("departamento/create", data);
            const question = await message.success(response.data.message);
            if (question.isConfirmed) {
                navigate(`/admin/departamento/ver/${response.data.id}`);
                handleEdition(response.data.id);
            }
        } catch (error) {
            return message.error(error.response.data.message || 'Ocurrió algo inesperado');
        }
    }

    const update = async e => {
        e.preventDefault();
        const inicio = mainImage.length ? mainImage[0].base64 : null;
        const cover = coverImage.length ? coverImage[0].base64 : null;
        const payload = { ...form.build(e.target), id, inicio, cover };

        try {
            const req = await request.post("departamento/update", payload)
            handleEdition();
        } catch (error) {
            console.log(error);
            return message("Lo sentimos, ocurrió un error");
        }
    }

    const removeImage = async idImage => {
        const question = await message.question('¿Deseas eliminar esta imágen?');
        if (question.isConfirmed) {
            try {
                const res = await request.post('departamento/removeImage', { id, idImage });
            } catch (error) {
                return message("Lo sentimos, ocurrió un error");
            }
        }
    };

    const handleImages = (stuff, name) => {
        console.log(stuff, name);
    }


    return (
        <>
            <Header title={`${id ? 'Editar' : 'Crear nuevo'} departamento`} customHandler={setErase} btnLabel="Eliminar" btnClass="btn-sm btn-danger" />

            <Main className="p-3 shadow">
                <form onSubmit={e => id ? update(e) : create(e)} className="d-flex flex-wrap">
                    <div className="col-lg-12 p-2">
                        <label htmlFor="">Nombre</label>
                        <input type="text" className="form-control" name="departamento" onChange={e => setDepartamento({ ...departamento, departamento: e.target.value })} value={departamento.departamento} />
                    </div>
                    <div className="col-6 p-2">
                        <label htmlFor="">Imágen del inicio</label>
                        {departamento.mainImage
                            ? <div className="card">
                                <img src={departamento.mainImage} alt="" className="card-img-top" />
                                <div className="card-footer">
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-sm"
                                        onClick={e => removeImage(departamento.idImagenMain)}
                                    >Eliminar</button>
                                </div>
                            </div>
                            : <Pond name="inicio" files={mainImage} onUpload={setMainImage} />
                        }
                    </div>
                    <div className="col-6 p-2">
                        <label htmlFor="">Imágen secundaria</label>
                        {departamento.coverImage
                            ? <div className="card">
                                <img src={departamento.coverImage} alt="" className="card-img-top" />
                                <div className="card-footer">
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-sm"
                                        onClick={e => removeImage(departamento.idImagenCover)}
                                    >Eliminar</button>
                                </div>
                            </div>
                            : <Pond name="cover" files={coverImage} onUpload={setCoverImage} />
                        }
                    </div>
                    <div className="col-12 d-flex justify-content-end mt-3">
                        <button className="btn btn-primary px-5">{id ? 'Actualizar' : 'Crear'}</button>
                    </div>
                </form>
            </Main>
        </>
    )

}

export default DepartamentoNuevo