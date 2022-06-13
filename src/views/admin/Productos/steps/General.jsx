import Pond from '../../../../components/admin/Filepond/Pond'
import FormBuilder from '../../../../components/admin/FormBuilder'

const formJSON = [{
    element: "input",
    type: "text",
    placeholder: "",
    label: "Nombre",
    name: "nombre",
    className: "col-lg-8"
},
{
    type: "custom",
    element: <div className="form-group col-md-4 col-lg-4">
        <label htmlFor="">Código</label>
        <div className="input-group">
            <input type="text" className="form-control" placeholder="0000" aria-label aria-describedby="basic-addon1" />
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
    className: "col-6 col-md-4 col-lg-3"
},
{
    element: "input",
    type: "number",
    placeholder: "",
    label: "Precio",
    name: "precio",
    className: "col-6 col-md-4 col-lg-3"
},
{
    element: "textarea",
    name: "nota",
    label: "Nota",
    rows: 1,
    className: "col-lg-6"
},
{
    element: "textarea",
    name: "descripcion",
    label: "Descripción",
    rows: 2,
    className: "col-lg-12"
},]
const General = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h4 className="font-weight-bold">Detalles generales</h4>
            </div>
            <form className="card-body d-flex flex-wrap">
                {formJSON.map((item, i) => <FormBuilder key={`formb-${i}`} item={item} />)}
                <div className="w-100 form-group">
                    <label htmlFor="">Imágen principal</label>
                    <Pond />
                </div>
            </form>
        </div>
    )
}

export default General