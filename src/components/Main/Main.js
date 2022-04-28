import React from 'react'
import Folders from '../Folders/Folders'
import classes from './Main.module.css'

const Main = () => {
  return (
    <div className={classes.container}>
      <div>nav</div>
      <Folders />
    </div>
  )
}

export default Main
