import Pond from '../../../../components/admin/Filepond/Pond'
import { request } from '../../../../services/request';
import { useState, useEffect } from 'react';
import SwitchButton from '../../../../components/public/switch/SwitchButton';

const General = ({ handleGeneralPayload, state, selected }) => {
    const [payload, setPayload] = useState({
        codigo: '', nombre: '', costo: '', precio: '', nota: '', descripcion: '', images: [], visible: true
    });
    
    const [loadCode, setLoadCode] = useState(false);
    let tmpImages = [];

    const generateCode = async () => {
        setLoadCode(true);
        const res = await request.get('code/generate');
        setPayload({ ...payload, codigo: res.data.code });
        setLoadCode(false)
    }

    useEffect(() => {
        handleGeneralPayload({ ...state, general: payload });
    }, [payload]);

    useEffect(() => {
        const selectionValues = Object.values(selected).filter(value => value);
        if (selectionValues.length >= 4) {
            setPayload(selected)
        }
    }, []);



    const handleVisible = check => {
        setPayload({ ...payload, ...check })
    }

    const onRemoveImage = id => {
        const _images = payload.images.filter(image => image.id !== id);
        setPayload({...payload, images: _images})
    }
    
    const onAddImages = image => {
        console.log("images from general");
        if (Array.isArray(image)) {
            setPayload({...payload, images: [...payload.images, ...image]})
        } else {
            setPayload({...payload, images: [...payload.images, image]})
        }
    }


    return (
        <div className="card">
            <div className="card-header d-flex justify-content-between">
                <h4 className="font-weight-bold">Detalles generales</h4>
                <div className="d-flex align-items-center dform-group">
                    <b className='mr-1'>Visible</b>
                    <SwitchButton name="visible" handler={handleVisible} checked={true} />
                </div>
            </div>
            <form className="card-body d-flex flex-wrap">
                <div className="form-group col-lg-8">
                    <label><span className='text-danger'>*</span> Nombre</label>
                    <input type="text" className="form-control" name="nombre" onChange={e => setPayload({ ...payload, nombre: e.target.value })} value={payload.nombre} />
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
                    <input type="number" className="form-control" name="costo" value={payload.costo} onChange={e => setPayload({ ...payload, costo: e.target.value })} />
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
                    <Pond 
                        files={payload.images}
                        multiple={true}
                        onRemove={onRemoveImage}
                        handler={onAddImages}
                    />
                </div>
            </form>
        </div>
    )
}

export default General