import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import useFolders from '../../hooks/useFolders.hook'
import { root } from '../../utils/root'
import classes from './Modal.module.css'

const Modal = ({ isOpen, onClose, folder }) => {
  const rootFolder = useSelector(
    (state) => state.folder.rootFolder
  )

  const [name, setName] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const { createFolder, openFolder } = useFolders()

  const handleCreateFolder = () => {
    const newFolderId = uuidv4()
    const newFolder = {
      subfolders: [],
      parentId: folder.id,
      id: newFolderId,
      title: name,
    }
    createFolder(newFolder, root)
    openFolder(newFolderId, rootFolder)
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
          <button onClick={handleCreateFolder}>Create</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
