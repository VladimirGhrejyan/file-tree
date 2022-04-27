import React, { useState } from 'react'
import useFolders from '../../hooks/useFolders.hook'
import root from '../../utils/getRoot'
import classes from './Modal.module.css'

const Modal = ({ isOpen, onClose, folder }) => {
  const [name, setName] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const { createFolder } = useFolders()

  const handleCreateFolder = () => {
    createFolder(folder.id, name, root)
    onClose()
  }

  if (!isOpen) {
    return
  }

  return (
    <div className={classes.modal}>
      <div className={classes['modal-content']}>
        <div className={classes['modal-title']}>
          <h2>Enter folder name</h2>
        </div>
        <div className={classes['modal-form']}>
          <input value={name} onChange={handleNameChange} />
        </div>

        <div className={classes['modal-actions']}>
          <button onClick={handleCreateFolder}>
            Create
          </button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
