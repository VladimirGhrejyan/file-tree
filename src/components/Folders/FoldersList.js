import React from 'react'
import FolderItem from './FolderItem'
import CreateButton from '../CreateButton/CreateButton'
import classes from 'FoldersList.module.css'

const FoldersList = ( {folder, onOpen} ) => {
    return (
        <div className={classes.container}>
            <CreateButton folder={folder} />
            <div className={classes.list}>
                <ul>
                    {folder.subfolders.map( item => (
                        <li key={item.id}>
                            <FolderItem folder={item} onOpen={onOpen} />
                        </li> 
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FoldersList