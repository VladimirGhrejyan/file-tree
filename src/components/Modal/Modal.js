import React, { useState } from 'react'
import useFolders from '../../hooks/useFolders.hook'
import classes from './Modal.module.css'

const Modal = ({isOpen, onClose, folder}) => {
    
    const [name, setName] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const {root, createFolder} = useFolders()
    
    if (!isOpen) {
        return
    }
    
    return (
        <div className={classes.modal}>
            <div>
                <form>
                    <label htmlFor='name'>Enter folder name</label>
                    <input id='name' value={name} onChange={handleNameChange} />
                </form>
            </div>

            <div>
                <button onClick={ () => createFolder(folder.id, name, root) }>Create</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default Modal