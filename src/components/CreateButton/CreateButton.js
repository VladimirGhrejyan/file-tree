import React, { Fragment, useState } from 'react'
import Modal from '../Modal/Modal'

const CreateButton = ({folders}) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <button onClick={handleOpenModal} >Create new folder</button>
            <Modal isOpen={isOpen} onClose={handleCloseModal} folders={folders} />
        </div>
    )
}

export default CreateButton