import React from 'react'
import classes from 'FoldersList.module.css'
import FolderItem from './FolderItem'

const FoldersList = ({folders}) => {
    return (
        <ul className={classes.list}>
            {folders.map( item => <li key={item.id}><FolderItem folder={item} /></li> )}
        </ul>
    )
}

export default FoldersList