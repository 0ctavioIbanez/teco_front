import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/admin/Header";
import Card from "../../../components/admin/Departamento/Card";
import Main from "../layout/Main";
import { request } from "../../../services/request";

const DepartamentosListado = () => {
    const [departamentos, setDepartamentos] = useState([]);

    const getDepartamentos = async () => {
        try {
            const response = await request.get('departamento/get');
            setDepartamentos(response.data.res)
        } catch (error) {
            alert('Error')
        }
    }



    useEffect(() => {
        getDepartamentos();
    }, [])


    return (
        <>
            <Header title="Todos mis departamentos" btnTo="/admin/departamento/nuevo" btnLabel="Crear nuevo" />
            <Main>
                {!departamentos.length ?
                    <>
                        <h4 className="text-center">Aún no tienes departamentos <Link to="/admin/departamento/nuevo" className="text-primary"><u>Crear</u></Link> </h4>
                    </>
                    : null}

                <div className="d-flex flex-wrap justify-content-around">
                    {departamentos.map((depto, d) => <Card depto={depto} key={`card-depto-${d}`} />)}
                </div>
            </Main>
        </>
    )
}

export default DepartamentosListado