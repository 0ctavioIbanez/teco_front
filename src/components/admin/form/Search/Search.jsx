import Select from "react-select";
import { useState, useEffect } from "react";

const Search = ({ items, name, state, handler, values }) => {
    const [selected, setSelected] = useState([]);
    const [shouldRender, setshouldRender] = useState(true)

    const customStyles = {
        multiValueLabel: (styles, { data }) => {
            const found = items.find(item => item.value == data.value);
            return {
                ...styles,
                borderLeft: found ? `5px solid ${found.color}` : null,
            }
        },
    };

    const controller = (_items) => {
        setshouldRender(false)
        setSelected(_items)

        if (typeof handler === 'function') {
            const newPayload = {};
            newPayload[name] = _items.map(opt => opt.value);

            if (state) {
                handler({ ...state, ...newPayload })
            } else {
                handler(newPayload)
            }
        }
    }

    useEffect(() => {
        if (items && items.length > 0 && values && shouldRender) {
            const result = values.map(value => items.find(item => item.value == value));
            setSelected(result)
        }
    }, [items])

    return (
        <>
            <Select
                onChange={opt => controller(opt)}
                options={items}
                isMulti
                name={name}
                styles={customStyles}
                noOptionsMessage={e => "No hay más resultados"}
                placeholder='Buscar...'
                value={selected}
            />

        </>
    )
}

export default Search