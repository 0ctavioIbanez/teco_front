
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import Droppable from './Droppable'
import { useState, useEffect } from 'react'
import { deviceType } from '../../../assets/helpers/utilities'

const DinamicList = ({ items }) => {
    const [size, setSize] = useState("");
    
    useEffect(() => {
        setSize(deviceType())
    }, [])
    


    return (
        <DndProvider backend={ size == "desktop" ? HTML5Backend : TouchBackend }>
            <Droppable items={items} />
        </DndProvider>
    )
}

export default DinamicList