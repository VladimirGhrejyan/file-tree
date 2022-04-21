import React from 'react'
import FoldersList from './FoldersList'

const Folders = ({root}) => {
    return (
        <div>
            <FoldersList folders={root} />
        </div>
    )
}

export default Folders