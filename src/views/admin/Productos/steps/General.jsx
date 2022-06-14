import Pond from '../../../../components/admin/Filepond/Pond'
import { request } from '../../../../services/request';
import { useState, useEffect } from 'react';

const General = ({handleGeneralPayload, state}) => {
    const [payload, setPayload] = useState({ 
        codigo: '', nombre: '', costo: null, precio: null, nota: '', descripcion: '', images: []
    });
    const [images, setImages] = useState([]);
    const [loadCode, setLoadCode] = useState(false);

    const generateCode = async () => {
        setLoadCode(true);
        const res = await request.get('code/generate');
        setPayload({ ...payload, codigo: res.data.code });
        setLoadCode(false)
    }

    useEffect(() => {
      setPayload({...payload, images})
    }, [images]);

    useEffect(() => {
      handleGeneralPayload({...state, general: payload})
    }, [payload]);
    

    return (
        <div className="card">
            <div className="card-header">
                <h4 className="font-weight-bold">Detalles generales</h4>
            </div>
            <form className="card-body d-flex flex-wrap">
                <div className="form-group col-lg-8">
                    <label><span className='text-danger'>*</span> Nombre</label>
                    <input type="text" className="form-control" name="nombre" onChange={e => setPayload({...payload, nombre: e.target.value})} value={payload.nombre} />
                </div>
                <div className="form-group col-md-4 col-lg-4">
                    <label><span className='text-danger'>*</span> Código</label>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="0000" value={payload.codigo} onChange={e => setPayload({ ...payload, codigo: e.target.value })} />
                        <div className="input-group-prepend">
                            <button className={`btn btn-borders btn-outline-${!loadCode ? 'dark' : 'info'}`} type="button" onClick={e => generateCode()}>
                                {!loadCode ? 'Generar' : <i className="fas fa-spin fa-sync-alt">
                                </i>}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="form-group col-6 col-md-4 col-lg-3">
                    <label><span className='text-danger'>*</span> Costo</label>
                    <input type="number" className="form-control" name="costo" value={payload.costo} onChange={e => setPayload({...payload, costo: e.target.value})} />
                </div>
                <div className="form-group col-6 col-md-4 col-lg-3">
                    <label><span className='text-danger'>*</span> Precio</label>
                    <input type="number" className="form-control" name="precio" value={payload.precio} onChange={e => setPayload({ ...payload, precio: e.target.value })} />
                </div>
                <div className="form-group col-lg-6">
                    <label>Nota</label>
                    <textarea name="nota" className="form-control" rows="1" defaultValue={payload.nota} onChange={e => setPayload({ ...payload, nota: e.target.value })} />
                </div>
                <div className="form-group col-lg-12">
                    <label>Descripción</label>
                    <textarea name="descripcion" className="form-control" rows="2" defaultValue={payload.descripcion} onChange={e => setPayload({ ...payload, descripcion: e.target.value })} />
                </div>

                <div className="w-100 form-group">
                    <label htmlFor="">Imágen principal</label>
                    <Pond multiple={true} handler={setImages} state={images} />
                </div>
            </form>
        </div>
    )
}

export default General