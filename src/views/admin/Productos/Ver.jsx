import Main from '../layout/Main';
import Header from '../../../components/admin/Header';
import { request } from '../../../services/request';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { message } from '../../../assets/helpers/Message';
import { v1 } from 'uuid';

// Producto components
import CatDeptos from '../Productos/steps/CatDeptos';
import General from '../Productos/steps/General';
import Modelos from '../Productos/steps/Modelos';

const Ver = () => {
    const [producto, setProducto] = useState({});
    const [generalPayload, handleGeneralPayload] = useState({});
    const [general, setGeneral] = useState({})
    const {id} = useParams()

    const getProducto = async () => {
        try {
            const req = await request.get(`producto/get/${id}`);
            const _response = req.data.details;
            setProducto(_response);
            setGeneral({
                codigo: _response.codigo,
                nombre: _response.nombre,
                costo: _response.costo,
                precio: _response.precio,
                nota: _response.nota,
                descripcion: _response.descripcion,
                images: _response.imagenes.map(({image}) => ({id: v1(), base64: image.split(", ")[1]})),
                visible: _response.visible
            });
        } catch (error) {
            message.error('Lo sentimos ocurrio un error')
        }
    };

    useEffect(() => {
        // message.loading("Trayendo datos...")
      getProducto();
    }, [])
    
    return (
        <>
            <Header title="Editar producto" btnTo="/" btnLabel="Vista previa" btnClass="btn-light btn-sm" />
            <Main className="">
                <General handleGeneralPayload={handleGeneralPayload} state={{}} selected={general} />
                <CatDeptos handleGeneralPayload={() => true} state={{}} selected={{categorias: []}} />
                <Modelos state={{modelos: []}} handleGeneralPayload={() => true} />
            </Main>
        </>
    )
}

export default Ver