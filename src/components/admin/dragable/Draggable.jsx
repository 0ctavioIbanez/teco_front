import { useDrag } from 'react-dnd'
import { deviceType } from '../../../assets/helpers/utilities'

const Draggable = ({ id, label, badgeColor }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'pet',
        item: { id, label },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    let classWhenDragging = 'd-none';

    if (deviceType() !== 'desktop') {
        classWhenDragging = 'btn-info';
    }

    return (
        <div className={`m-1 btn-rounded btn ${isDragging ? classWhenDragging : `btn-${badgeColor}`}`} ref={dragRef}>
            {label}
        </div>
    )
}

export default Draggable