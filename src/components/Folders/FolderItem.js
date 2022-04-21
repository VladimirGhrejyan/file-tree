import React from 'react'

const FolderItem = ( {folder} ) => {
    return (
        <button>{folder.title}</button>
    )
}

export default FolderItem