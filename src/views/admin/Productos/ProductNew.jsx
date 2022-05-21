import Header from "../../../components/admin/Header"
import FormBuilder from "../../../components/admin/FormBuilder"
import Select from 'react-select';
import { useState } from "react";

const ProductNew = () => {
    const [departamentos, setDepartamentos] = useState([{ value: 'chocolate', label: 'Chocolate' },
                                                        { value: 'strawberry', label: 'Strawberry' },
                                                        { value: 'vanilla', label: 'Vanilla' },])

    const formJSON = [{
        element: "input",
        type: "text",
        placeholder: "",
        label: "Nombre",
        name: "nombre",
        className: "col-lg-4"
    },
    {
        type: "custom",
        element: <div className="form-group">
            <label htmlFor="">Código</label>
            <div className="input-group">
                <input type="text" className="form-control" placeholder aria-label aria-describedby="basic-addon1" />
                <div className="input-group-prepend">
                    <button className="btn btn-default btn-border" type="button">Generar</button>
                </div>
            </div>
        </div>,
    },
    {
        element: "input",
        type: "number",
        placeholder: "",
        label: "Costo",
        name: "costo",
        className: "col-lg-4"
    },
    {
        element: "input",
        type: "number",
        placeholder: "",
        label: "Precio",
        name: "precio",
        className: "col-lg-4"
    },
    {
        element: "textarea",
        name: "nota",
        label: "Nota",
        rows: 1,
        className: "col-lg-8"
    },
    {
        element: "textarea",
        name: "descripcion",
        label: "Descripción",
        rows: 2,
        className: "col-lg-12"
    },]
    return (
        <>
            <Header title="Crear nuevo producto" />
            <div className="page-inner mt--5">
                <div className="card">
                    <div className="card-header">
                    <h4 className="font-weight-bold">Detalles generales</h4>
                    </div>
                    <form className="card-body d-flex flex-wrap">
                        {formJSON.map(item => <FormBuilder item={item} />)}
                    </form>
                </div>

                <div className="card">
                    <div className="card-header">
                    <h4 className="font-weight-bold">Detalles generales</h4>
                    </div>
                    <form className="card-body d-flex flex-wrap">
                        {formJSON.map(item => <FormBuilder item={item} />)}
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProductNew