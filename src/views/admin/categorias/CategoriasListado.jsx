import { useState, useEffect } from "react";
import Header from "../../../components/admin/Header"
import Main from "../layout/Main"
import { request } from "../../../services/request";
import { message } from "../../../assets/helpers/Message";
import Card from "../../../components/admin/Departamento/Card";

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

                {!categorias.length ? <h3 className="text-center">Aún no se han agregado categorías</h3> : null}
                {categorias.map((categoria, c) => <Card key={`categoria-${c}`} />)}

            </Main>
        </>
    )
}

export default CategoriasListado