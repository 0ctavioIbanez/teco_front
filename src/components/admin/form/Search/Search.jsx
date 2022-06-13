import { useState } from "react";
import Select from "react-select";

const Search = ({ items, name, label }) => {
    const [manual, toggleManual] = useState(items.length >0 ? false : true);

    const customStyles = {
        multiValueLabel: (styles, { data }) => {
            const found = items.find(item => item.value == data.value);
            return {
                ...styles,
                borderLeft: `5px solid ${found.color}`,
            }
        },
    }

    return (
        <div className="form-group col-md-4">
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
                <input type="text" className="form-control" />
                : <Select
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