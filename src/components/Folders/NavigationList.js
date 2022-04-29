import React from 'react'
import { useSelector } from 'react-redux'
import NavigationItem from './NavigationItem'
import BackButton from '../Buttons/BackButton'
import classes from './NavigationList.module.css'

const NavigationList = () => {
  const folders = useSelector(
    (state) => state.folder.previousFolders
  )

  return (
    <div className={classes.container}>
      <div>
        <BackButton />
      </div>
      <div className={classes.list}>
        <ul>
          {folders.map((folder) => (
            <li key={folder.id}>
              <NavigationItem folder={folder} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavigationList
