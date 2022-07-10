import Header from "../../../components/admin/Header"
import { useState } from "react";
import { message } from '../../../assets/helpers/Message';
import { request } from "../../../services/request";


import Main from '../layout/Main'
// Steps
import General from "./steps/General";
import CatDeptos from "./steps/CatDeptos";
import Modelos from "./steps/Modelos";

const ProductNew = () => {
    const [step, setStep] = useState(1);
    const [payload, setPayload] = useState({ general: {}, detalles: {}, modelos: {} });
    const maxStep = 3;

    const handleStep = async to => {
        if (step == 0 && to === -1) {
            return;
        }

        if (step === 1 && to === 1) {
            const { nombre, codigo, costo, precio } = payload.general;
            if (!nombre || !codigo || !costo || !precio) {
                return message.error('Por favor completa los campos requeridos');
            }
        }

        if (step === 2 && to === 1) {
            const { categorias, departamentos } = payload.detalles;
            if (!categorias.length || !departamentos.length) {
                return message.error('Por favor completa los campos requeridos');
            }
        }

        if (step === 3 && to === 1) {
            const { color, talla } = payload.modelos;
            if (!color.length || !talla.length) {
                return message.error('Por favor completa los campos requeridos');
            }

            // Prepare images
            const general_images = payload.general.images.map(image => image.base64);
            const modelos_images = payload.modelos.images.map(image => image.base64);
            const general = { ...payload.general, images: general_images };
            const modelos = { ...payload.modelos, images: modelos_images };
            const _payload = { ...payload, modelos, general };

            try {
                const { data } = await request.post('producto/create', _payload);
                setPayload({ general: {}, detalles: {}, modelos: {} });
                message.success(data.message);
                setStep(1);
            } catch (error) {
                message.error('Lo sentimos, ocurrió un error');
                console.log(error);
            }
            return
        }
        setStep(step + to);
    };

    return (
        <>
            <Header title="Crear nuevo producto" subtitle={`${step} de ${maxStep}`} />
            <Main>
                {step == 1 ? <General selected={payload.general} handleGeneralPayload={setPayload} state={payload} /> : null}
                {step == 2 ? <CatDeptos selected={payload.detalles} handleGeneralPayload={setPayload} state={payload} /> : null}
                {step == 3 ? <Modelos handleGeneralPayload={setPayload} state={payload} /> : null}

                <div className="d-flex justify-content-end">
                    {step > 1 ? <button className="btn btn-outline-primary mr-1" onClick={e => handleStep(-1)}>Regresar</button> : null}
                    <button className="btn btn-primary" onClick={e => handleStep(1)}>
                        {maxStep == step ? 'Finalizar' : 'Continuar'}
                    </button>
                </div>
            </Main>
        </>
    )
}

export default ProductNew