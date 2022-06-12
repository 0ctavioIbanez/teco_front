import { useState, useEffect } from "react";
import Header from "../../../components/admin/Header"
import Main from "../layout/Main"
import { request } from "../../../services/request";
import { message } from "../../../assets/helpers/Message";
import { Link } from "react-router-dom";
import thumb from '../../../assets/img/no-preview.jpeg';

const CategoriasListado = () => {
    const [categorias, setCategorias] = useState([]);

    const getCategorias = async () => {
        try {
            const response = await request.get("categoria/get");
            setCategorias(response.data);
            console.log(categorias);
        } catch (error) {
            return message.error('Algo salió mal')
        }
    }

    useEffect(() => {
        getCategorias();
    }, [])


    return (
        <>
            <Header title="Mis categorías" btnTo="/admin/categorias/nueva" btnLabel="Crear categoría" />
            <Main>
                <div className="d-flex flex-wrap">
                    {!categorias.length ? <h3 className="text-center">Aún no se han agregado categorías</h3> : null}
                    {categorias.map((categoria, c) => 
                        <Link to={`/admin/categorias/ver/${categoria.id}`} className="card col-lg-3 m-1">
                            <img src={`${categoria.image || thumb}`} alt="" className="card-img-top" />
                            <h3 className="text-center">{ categoria.categoria }</h3>
                        </Link>
                    )}

                </div>

            </Main>
        </>
    )
}

export default CategoriasListado