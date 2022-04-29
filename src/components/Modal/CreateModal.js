import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { Modal, Input } from 'antd'
import useFolders from '../../hooks/useFolders.hook'
import { root } from '../../utils/root'

const CreateModal = ({ isOpen, onClose, folder }) => {
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
    openFolder(folder.id, rootFolder)
    onClose()
  }

  if (!isOpen) {
    return
  }

  return (
    <Modal
      title='Create new folder'
      visible={isOpen}
      onOk={handleCreateFolder}
      onCancel={onClose}
    >
      <div>
        <Input
          value={name}
          onChange={handleNameChange}
          placeholder='...enter folder name'
        />
      </div>
    </Modal>
  )
}

export default CreateModal
