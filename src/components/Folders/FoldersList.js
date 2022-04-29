import React from 'react'
import { useSelector } from 'react-redux'
import FolderItem from './FolderItem'
import CreateButton from '../Buttons/CreateButton'
import classes from './FoldersList.module.css'

const FoldersList = () => {
  const folder = useSelector(
    (state) => state.folder.currentFolder
  )

  return (
    <div className={classes.container}>
      <CreateButton folder={folder} />
      <div className={classes.list}>
        <ul>
          {folder.subfolders.map((item) => (
            <li key={item.id}>
              <FolderItem folder={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FoldersList
