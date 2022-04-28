import React from 'react'
import FoldersList from './FoldersList'
import NavigationList from './NavigationList'
import classes from './Folders.module.css'

const Folders = () => {
  return (
    <div className={classes.container}>
      <NavigationList />
      <FoldersList />
    </div>
  )
}

export default Folders
