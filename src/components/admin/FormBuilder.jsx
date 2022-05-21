import React from 'react'

const FormBuilder = ({ item }) => {

    if (item.type == 'custom') {
        return (item.element)
    }

    let Element;

    switch (item.element) {
        case "select":
            Element = <select></select>
            break;
        case "textarea": 
            Element = <textarea name={item.name} className="form-control" rows={item.rows || 2}></textarea>
            break;
        default:
            Element = <input 
                        type={item.type || 'text'}
                        className="form-control"
                        name={item.name}
                        // value={item.value || ''}
                        disabled={ item.disabled }
                      />
            break;
    }

    return (
        <div className={`form-group ${item.className}`}>
            <label htmlFor="">{ item.label }</label>
            { Element }
        </div>
    )
}

export default FormBuilder