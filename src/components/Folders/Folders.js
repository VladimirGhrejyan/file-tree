import React, {useState} from 'react'
import useFolders from '../../hooks/useFolders.hook'
import FoldersList from './FoldersList'

const Folders = () => {
    
    const {root} = useFolders()
    const [folder, setFolder] = useState(root)

    const handleOpenNewFolder = (selectedFolder) => {
        setFolder(selectedFolder)
    }

    return (
        <div>
            <FoldersList folder={folder} onOpen={handleOpenNewFolder} />
        </div>
    )
}

export default Folders