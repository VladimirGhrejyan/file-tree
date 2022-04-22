import React from 'react'

const FolderItem = ( {folder, onOpen} ) => {
    return (
        <button onClick={() => onOpen(folder)}>
            {folder.title}
        </button>
    )
}

export default FolderItem