import React, { useState } from 'react'
import { Button } from 'antd'
import { FolderAddFilled } from '@ant-design/icons'
import CreateModal from '../Modal/CreateModal'

const CreateButton = ({ folder }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <Button
        size='large'
        icon={<FolderAddFilled />}
        onClick={handleOpenModal}
      >
        Create
      </Button>
      <CreateModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        folder={folder}
      />
    </div>
  )
}

export default CreateButton
