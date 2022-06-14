import { useState, useEffect } from "react";
import Select from "react-select";

const Search = ({ className, items, name, label, state, handler }) => {
    const [manual, toggleManual] = useState(false);

    useEffect(() => {
        toggleManual(items.length > 0 ? false : true)
    }, [items])


    const customStyles = {
        multiValueLabel: (styles, { data }) => {
            const found = items.find(item => item.value == data.value);
            return {
                ...styles,
                borderLeft: `5px solid ${found.color}`,
            }
        },
    };

    const controller = (items, input = false) => {
        if (input) {
            const newPayload = {};
            newPayload[name] = items;
            if (state) {
                return handler({...state, ...newPayload})
            }
            return handler({...newPayload})
        }

        if (typeof handler === 'function') {
            const newPayload = {};
            newPayload[name] = items.map(opt => opt.value);
            
            if (state) {
                handler({ ...state, ...newPayload })
            } else {
                handler(newPayload)
            }
        }
    }

    return (
        <div className={`form-group ${className}`}>
            <div className="d-flex justify-content-between">
                <label htmlFor="">{label}</label>
                {items.length ?
                    <small className={`hover-pointer text-${manual ? 'success' : 'primary'}`} onClick={e => toggleManual(!manual)}>
                        <b>{manual ? 'Buscar existente' : 'Crear nuevo'}</b>
                    </small>
                    : null
                }
            </div>
            {manual ?
                <input type="text" className="form-control" name={name} onChange={e => controller(e.target.value, true)} />
                : <Select
                    onChange={opt => controller(opt)}
                    options={items}
                    isMulti
                    name={name}
                    styles={customStyles}
                    noOptionsMessage={e => "No hay más resultados"}
                    placeholder='Buscar...'
                />
            }
        </div>
    )
}

export default Search