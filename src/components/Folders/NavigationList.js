import React from 'react'
import { useSelector } from 'react-redux'
import NavigationItem from './NavigationItem'
import classes from './NavigationList.module.css'

const NavigationList = () => {
  const folders = useSelector(
    (state) => state.folder.previousFolders
  )

  return (
    <div className={classes.container}>
      <ul>
        {folders.map((folder) => (
          <li key={folder.id}>
            <NavigationItem folder={folder} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavigationList
