import { useState, useEffect } from "react"
import { request } from "../../../../services/request";
import Search from '../../../../components/admin/form/Search/Search'
import SwitchButton from "../../../../components/public/switch/SwitchButton";
import Pond from '../../../../components/admin/Filepond/Pond';

const Modelos = () => {
    const [colores, setColores] = useState([]);
    const [tallas, setTallas] = useState([]);

    const getColores = async () => {
        const res = await request.get("color/get");
        const scopedColor = res.data.map(col => ({ value: col.id, label: col.color, color: col.hex }))
        setColores(scopedColor)
    };

    const getTallas = async () => {
        const res = await request.get("talla/get");
        setTallas(res.data.map(item => ({ value: item.id, label: item.talla })));
    };

    useEffect(() => {
        Promise.all([
            getColores(),
            getTallas()
        ]);
    }, [])

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4 className="font-weight-bold">Agrega modelos</h4>
                </div>
                <div className="card-body d-flex flex-wrap">
                    <Search items={colores} name='color' label="Colores" />
                    <Search items={tallas} name='talla' label="Tallas" />
                    <div className="form-group col-md-4">
                        <label htmlFor="">Costo extra</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">Precio extra</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">¿Visible aún sin stock?</label>
                        <SwitchButton name="visibleSinStock" checked={true} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">¿Inicializarlo visible?</label>
                        <SwitchButton name="visible" checked={true} />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h4 className="font-weight-bold">Subir imágenes</h4>
                </div>
                <div className="card-body">
                    <Pond multiple={true} name="modelImages" />
                </div>
            </div>
        </>
    )
}

export default Modelos