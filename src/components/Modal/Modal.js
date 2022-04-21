import React, { useState } from 'react'
import classes from './Modal.module.css'
import {v4 as uuidv4} from 'uuid'

const Modal = ({isOpen, onClose, folders, id}) => {
    
    const [name, setName] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleCreateFolder = () => {
        const folder = {
            subfolders: [],
            id: uuidv4(),
            title: name
        }

        const addSubfolder = (obj, id) => {
            if (obj.id !== id && obj.subfolders.length) {
                for (let i = 0; i < obj.subfolders.length; i++) {
                    return addSubfolder(obj.subfolders[i], id)
                }
            } else if (obj.id !== id) {
                return
            }
        
            obj.subfolders.push(folder)
        }

        
        for (let i = 0; i < folders.length; i++) {
            addSubfolder(folders[i], id)
        }

        localStorage.setItem('root', folders)
        
    }
    
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
                <button onClick={handleCreateFolder}>Create</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default Modal