import { useState } from 'react';
import { useDrop } from 'react-dnd';
import Draggable from './Draggable';
import './draggable.css'

const Droppable = ({ items }) => {
    const [itemsToDrag, handleItemsToDrag] = useState(items);
    const [basket, setBasket] = useState([]);

    const removeRepeated = (id, origin) => {
        if (origin == "items") {
            handleItemsToDrag(itemsToDrag.filter(item => item.id != id));
            return;
        } 
        setBasket(basket.filter(item => item.id != id));
    }


    const [{ isOver }, dropRef] = useDrop({
        accept: 'pet',
        drop: (item) => {
            if (basket.find(bkt => bkt.id == item.id)) {
                return;
            }
            setBasket([...basket, item]);
            removeRepeated(item.id, "items");
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    const [{ isOver:isOverRemove }, dropRemoveRef] = useDrop({
        accept: 'pet',
        drop: (item) => {
            if (itemsToDrag.find(itd => itd.id == item.id)) {
                 return
            }
            handleItemsToDrag([...itemsToDrag, item]);
            removeRepeated(item.id, "basket")
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    return (
        <div className='d-flex flex-wrap'>
            <div className={`col-12 col-lg-6 rounded p-2 ${ isOverRemove ? 'shadow--danger' : null }`} ref={dropRemoveRef} style={{ minWidth: "200px" }}>
                {itemsToDrag.map((item, i) => <Draggable key={`item-td-${i}`} badgeColor="dark" draggable id={item.id} label={item.label} />)}
                <div className='text-center text-danger'>Suelta para remover</div>
            </div>
            <div className={`col-12 col-lg-6 basket rounded p-2 ${ isOver ? 'shadow--success' : null }`} ref={dropRef} style={{ minWidth: "200px" }}>
                {basket.map((bkt, b) => <Draggable key={`bkt-${b}`} badgeColor="success" draggable id={bkt.id} label={bkt.label} />)}
                <div className='text-center text-success'>Suelta para añadir</div>
            </div>
        </div>
    )
}

export default Droppable