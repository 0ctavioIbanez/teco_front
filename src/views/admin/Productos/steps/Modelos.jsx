import { useState, useEffect } from "react"
import { request } from "../../../../services/request";
import Search from '../../../../components/admin/form/Search/Search'
import SwitchButton from "../../../../components/public/switch/SwitchButton";
import Pond from '../../../../components/admin/Filepond/Pond';

const Modelos = ({ handleGeneralPayload, state }) => {
    const [colores, setColores] = useState([]);
    const [tallas, setTallas] = useState([]);
    const [payload, setPayload] = useState({
        costoExtra: null, precioExtra: null, color: [], talla: [],
        visible: true, visibleSinStock: true, images: []
    });

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
    }, []);

    useEffect(() => {
        handleGeneralPayload({...state, modelos: payload});
    }, [payload]);

    const controller = check => {
        setPayload({...payload, ...check})
    };

    const handleImage = (pond, remove = false) => {
        if (remove) {
            const result = payload.images.filter(item => item.id != pond);
            return setPayload({...payload, images: result})
        }
        setPayload({...payload, images:[...payload.images, pond]})
    }
    

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4 className="font-weight-bold">Agrega modelos</h4>
                </div>
                <div className="card-body d-flex flex-wrap">
                    <Search handler={setPayload} state={payload} className="col-md-6" items={colores} name='color' label="* Colores" />
                    <Search handler={setPayload} state={payload} className="col-md-6" items={tallas} name='talla' label="* Tallas" />
                    <div className="form-group col-md-3">
                        <label htmlFor="">Costo extra</label>
                        <input type="number" className="form-control" value={payload.costoExtra} onChange={e => setPayload({...payload, costoExtra: e.target.value})} />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="">Precio extra</label>
                        <input type="number" className="form-control" value={payload.precioExtra} onChange={e => setPayload({...payload, precioExtra: e.target.value})} />
                    </div>
                    <div className="form-group col-6 col-md-3">
                        <label htmlFor="">¿Visible sin stock?</label>
                        <SwitchButton handler={controller} name="visibleSinStock" checked={true} />
                    </div>
                    <div className="form-group col-6 col-md-3">
                        <label htmlFor="">¿Visible?</label>
                        <SwitchButton handler={controller} name="visible" checked={true} />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h4 className="font-weight-bold">Subir imágenes</h4>
                </div>
                <div className="card-body">
                    <Pond handler={handleImage} multiple={true} name="modelImages" />
                </div>
            </div>
        </>
    )
}

export default Modelos