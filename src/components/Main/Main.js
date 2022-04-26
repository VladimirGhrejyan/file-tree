import React from 'react'
import FoldersList from '../Folders/FoldersList'
import classes from './Main.module.css'

const Main = () => {
  return (
    <div className={classes.container}>
      <div>nav</div>
      <FoldersList />
    </div>
  )
}

export default Main
