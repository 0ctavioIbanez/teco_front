import './switch.css'
import { useState } from 'react';
import { v1 } from 'uuid'

const SwitchButton = ({name, checked, handler}) => {
  const [enabled, handleEnabled] = useState(checked);
  const id = v1();

  const controller = checked => {
    if (typeof handler === 'function') {
      const newPaylod = {};
      newPaylod[name] = checked;
      handler(newPaylod);
    }

    handleEnabled(checked)
  }

  return (
    <div className="switches">
      <div className='switch__container'>
        <input 
          type="checkbox" 
          name={name}
          id={id}
          checked={enabled}
          onChange={e => controller(e.target.checked)}
        />
        <label className='switch__label' htmlFor={id}>
          <span></span>
        </label>
      </div>
    </div>
  )
}

export default SwitchButton