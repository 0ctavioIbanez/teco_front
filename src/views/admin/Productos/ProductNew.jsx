// Aqui
import Header from "../../../components/admin/Header"
import { useState } from "react";


import Main from '../layout/Main'
// Steps
import General from "./steps/General";
import CatDeptos from "./steps/CatDeptos";
import Modelos from "./steps/Modelos";

const ProductNew = () => {
    const [step, setStep] = useState(1);
    const maxStep = 3;

    const handleStep = to => {
        if (step == 0 && to === -1 || step == maxStep && to === 1) {
            return;
        }

        setStep(step + to);
    };

    return (
        <>
            <Header title="Crear nuevo producto" subtitle={`${step} de ${maxStep}`} />
            <Main>
                {step == 1 ? <General /> : null}
                {step == 2 ? <CatDeptos /> : null}
                {step == 3 ? <Modelos /> : null}

                <div className="d-flex justify-content-end">
                    {step > 1 ? <button className="btn btn-outline-primary mr-1" onClick={e => handleStep(-1)}>Regresar</button> : null}
                    <button className="btn btn-primary" onClick={e => handleStep(1)}>
                        { maxStep == step ? 'Finalizar' : 'Continuar' }
                    </button>
                </div>
            </Main>
        </>
    )
}

export default ProductNew