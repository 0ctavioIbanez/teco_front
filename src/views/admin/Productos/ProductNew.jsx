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
    const [payload, setPayload] = useState({general: {}, detalles: {}, modelos: {}});
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

            const res = await request.post('producto/create', payload);
            console.log(res);
            return
        }
        console.log(payload);
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